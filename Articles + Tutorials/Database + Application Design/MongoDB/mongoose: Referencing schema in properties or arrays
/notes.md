Lets consider we'll have a users collection and a posts collection, thus we'll have a `UserSchema` as well as a `PostSchema`. Posts can be written by users and the can by commented by users.

UserSchema

```js
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("User", UserSchema);
```

Beside the title property, the `PostSchema` also defines the reference by ObjectId for the postedBy property of the `PostSchema` as well as the postedBy property of the comments inside the comments array property:

```js
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

module.exports = mongoose.model("Post", PostSchema);
```

Now lets create two users:

```js
require("./database");

var User = require('./User'),
    Post = require('./Post');


var alex = new User({
    name: "Alex"
});

var joe = new User({
    name: "Joe"
})

alex.save();
joe.save();
```

The interesting part of course is the creation and even more the query for posts. The post is created with the ObjectId references to the users.

```js
var post = new Post({
    title: "Hello World",
    postedBy: alex._id,
    comments: [{
        text: "Nice post!",
        postedBy: joe._id
    }, {
        text: "Thanks :)",
        postedBy: alex._id
    }]
})
```

Now lets save the Post and after it got created, query for all existing Posts.

```js
post.save(function(error) {
    if (!error) {
        Post.find({})
            .populate('postedBy')
            .populate('comments.postedBy')
            .exec(function(error, posts) {
                console.log(JSON.stringify(posts, null, "\t"))
            })
    }
});
```

As you can see, the we're using the populate function of mongoose to join the documents when querying for `Posts`. The first call to populate joins the `Users` for the `postedBy` property of the posts whereas the second one joins the `Users` for the `comments`.

The Post document in the database looks like this:

```js
{
    "_id" : ObjectId("54cd6669d3e0fb1b302e54e6"),
    "title" : "Hello World",
    "postedBy" : ObjectId("54cd6669d3e0fb1b302e54e4"),
    "comments" : [
        {
            "text" : "Nice post!",
            "postedBy" : ObjectId("54cd6669d3e0fb1b302e54e5"),
            "_id" : ObjectId("54cd6669d3e0fb1b302e54e8")
        },
        {
            "text" : "Thanks :)",
            "postedBy" : ObjectId("54cd6669d3e0fb1b302e54e4"),
            "_id" : ObjectId("54cd6669d3e0fb1b302e54e7")
        }
    ],
    "__v" : 0
}
```

In contrast, the query result is a full document containing all User references for the Posts.

```js
[
    {
        "_id": "54cd6669d3e0fb1b302e54e6",
        "title": "Hello World",
        "postedBy": {
            "_id": "54cd6669d3e0fb1b302e54e4",
            "name": "Alex",
            "__v": 0
        },
        "__v": 0,
        "comments": [
            {
                "text": "Nice post!",
                "postedBy": {
                    "_id": "54cd6669d3e0fb1b302e54e5",
                    "name": "Joe",
                    "__v": 0
                },
                "_id": "54cd6669d3e0fb1b302e54e8"
            },
            {
                "text": "Thanks :)",
                "postedBy": {
                    "_id": "54cd6669d3e0fb1b302e54e4",
                    "name": "Alex",
                    "__v": 0
                },
                "_id": "54cd6669d3e0fb1b302e54e7"
            }
        ]
    }
]
```
