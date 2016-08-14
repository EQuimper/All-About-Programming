'use strict';

const express = require('express');
const badges = require('./controllers/badges');

const app = express();

// Can replace this by body-parser
// this is old version of express
app.use(express.json());

// Controller.Action => Middlware
app.post('/', badges.save, badges.send, (req, res) => {
    res.send('\ndone\n\n');
});

app.listen(3000);


/**********************************/

// controllers/badges

'use strict';

const _ = require('underscore');
const model = require('../models/badge');

// Send badges to model to be saved

// next = i'm done inside this block => go to the next one
exports.save = (req, res, next) => {
    const badges = _.clone(req.body);
    model.save(badges, (err) => {
        if (err) return res.json(503, { error: true });
        next(); // Go to the next middleware
        model.trim();
    });
};

// Send badges to pub/sub socket in model

exports.send = (req, res, next) => {
    const badges = _.clone(req.body)
    model.send(badges, (err) => {
        if (err) return throw err;
        res.json(200, {
            error: null
        });
    });
};

/**********************************/

// models/badge

'use strict';

const redis = require('../lib/redis');
const broadcast = require('../lib/broadcast');

// Save badges to database
// @param {Array} badges
// @param {Function} cb
exports.save = (badges, cb) => {
    if (!badges.length) return cb(null, null);
    const badge = badges.pop();
    redis.lpush('badges', JSON.stringify(badge), (err) => {
        if (err) return cb(err, null);
        exports.save(badges, cb);
    });
}

// Trim down the redis list
exports.trim = () => {
    redis.ltrim('badges', 0, 9);
}

// Send out badges to the broadcaster
// @param {Array} badges
// @param {Function} cb

exports.send = (badges, cb) => {
    badges.forEach(broadcast.send);
    cb(null, null);
}

/**********************************/

// lib/redis

'use strict';

const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
    throw err;
});

module.exports = client;

/**********************************/

// lib/broadcast
