# Publication / Subscription

## Publishing

An app's database can contain tens of thousands of documents, some of which might even be private or sensitive.

So we'll need a way to tell Meteor which subset of data can be sent to the client, and we'll accomplish this through a publication.

Server Example:

```js
Meteor.publish('posts', function(author) {
  return Posts.find({flagged: false, author: author});
});
```

This ensures there is no possible way that a client will be able to access a flagged post.

---

## Subscribing

Even though we want to make any non-flagged post available to clients, we can't just send thousands of posts at once. We need a way for clients to specify which subset of that data they need at any particular moment, and that's exactly where subscriptions come in.

Any data you subscribe to will be mirrored on the client thanks to Minimongo, Meteor's client-side implementation of MongoDB.

Client Example:

```js
Meteor.subscribe('posts', 'bob-smith');
```

---

## Session Variable

Always store user state in the Session or the URL so that users are minimally disrupted when a hot code reload happens.

Store any state that you want to be shareable between users within the URL itself.

Exampe:

```js
Session.set('pageTitle', 'A brand new title');
Session.get('pageTitle'); // 'A brand new title”
```
