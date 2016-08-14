PostgreSQL > Polling Script > Pub/Sub Server > Web Server

# Pub/Sub Server

## Packages to help

- Axon
- Redis
- Express
- Underscore

---

# The idea

The idea of this protocol is to make 2 server. One who id the regular web-server and the second is a non public server use to fetch data from a api and pub this to a server who is sub to this one.

---

# Express

If we want to get static file coming from express we can do

```js
app.use(express.static('folder where we have the file like public'));
```

Example if we want to send the `index.html` file to the `/` path we do:

```js
app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
});
```

---

# jQuery

```js
$(function() {});
```

this mean we wait for the dom is ready

```js
var $img = $('<img src="' + badge.badge_id +'" alt="Code School Badge"');
$('body').prepend($img);
```

prepend push the data to the FE
