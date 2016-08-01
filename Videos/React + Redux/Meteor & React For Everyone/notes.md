# Meteor & React For Everyone

## Settings.json

You can setup a `settings.json` file where you can have two kind of data.

- Private
- Public

This is a good place to put a api key. But be careful with github.

Ex:

```json
{
    "public": {
        "test": "Hello"
    },
    "private": {
        "pTest": "Hello Private"
    }
}
```

For passing it to the app we need in the console to do `meteor --settings <nameofthefile>`

To get it the command is:

```js
Meteor.settings.private.<namevariable>
```

---

## Sessions variables

Meteor have some kind of sessions variable. This is a global state. You can setup this with:

```js
Session.set('test', 'Hello');
```

And we can get this with:

```js
Sessions.get('test');
```

That look like a bit like redux. But this is global. This is good for open something in a other page.

---

## Methods

After removing some prototype package you need to use Method for create new stuff in the db. You put this in the server folder. This is like working with api.

```js
Meteor.methods({
    addPost(post) {
        Post.insert({
            title: post.title,
            text: post.text
        });
    }
});
```

---

## Publish

We need to create some kind of function for get the data after remove the prototype package.

```js
Meteor.publish('getAllPost', Post.find().fetch());
```

---

## Subscribe

And for get the data from publish we sub to it.

```js
Meteor.subscribe('getAllPost');
```

## Check

Use check package for verified the var we push to the method. This is a big security thing.

Ex:

```js
Meteor.methods({
    addPost(post) {
        check(Post, Object);
        Post.insert({
            title: post.title,
            text: post.text
        });
    }
});
```

---

## Animation

For animation stuff and transition react have a package call `react-addons-css-transition-group`.

```js
<ReactCSSTransitionGroup
      component="div"
      className="ui feed"
      transitionName="reviewsLoad"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={600}>
      <item></item>
</ReactCSSTransitionGroup>
```
---
