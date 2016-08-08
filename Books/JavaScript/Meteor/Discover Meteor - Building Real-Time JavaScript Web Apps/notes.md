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

---

## Allow & Deny

With Meteor you can allow or deny pretty easy. That let use control the database manipulation.

---

## Increment

Mongo have a helper for help increment inside a document. This is the `$inc` operator.

---

## Denormalization

Denormalizing data means not storing that data in a “normal” form. In other words, denormalization means having multiple copies of the same piece of data hanging about.

---

## Embedding Documents or Using Multiple Collections

Mongo suggests embedding documents in order to reduce the number of expensive queries to fetch documents.

---

## $addToSet

Adds an item to an array property as long as it doesn't already exist.

---

## Collection

A Meteor Collection is the data store that automatically synchronizes between client and server. Collections have a name (such as posts), and usually exist both on client and server.

---

## MiniMongo

The client-side collection is an in-memory data store offering a Mongo-like API. The library that supports this behaviour is called “MiniMongo”, to indicate it's a smaller version of Mongo that runs completely in memory.

---

## Document

Mongo is a document-based data-store, so the objects that come out of collections are called “documents”. They are plain JavaScript objects (although they can't contain functions) with a single special property, the _id, which Meteor uses to track their properties over DDP.

---

## DDP

DDP is Meteor's Distributed Data Protocol, the wire protocol used to synchronize collections and make Method calls. DDP is intended as a generic protocol, which takes the place of HTTP for realtime applications that are data heavy.

---

## Client

When we talk about the Client, we are referring to code running in the users web browser, whether that is a traditional browser like Firefox or Safari, or something as complex as a UIWebView in a native iPhone application.

---

## Computation

A computation is a block of code that runs every time one of the reactive data sources that it depends on changes. If you have a reactive data source (for example, a Session variable) and would like to respond reactively to it, you'll need set up a computation for it.

---

## Server

The Meteor server is a HTTP and DDP server run via node.js. It consists of the all the Meteor libraries as well your server-side JavaScript code. When you start your Meteor server, it connects to a Mongo database (which it starts itself in development).

---

## Method

A Meteor Method is a remote procedure call from the client to the server, with some special logic to keep track of collection changes and allow Latency Compensation.

---

## Latency Compensation

Is a technique to allow simulation of Method calls on the client, to avoid lagginess while waiting for the server to respond.

---

## Session

The Session in Meteor refers to a client-side reactive data source that's used by your application to track the state that the user's in.

---

## Publication

A publication is a named set of data that is customized for each user that subscribes to it. You set up a publication on the server.

---

## Subscription

A subscription is a connection to a publication for a specific client. The subscription is code that runs in the browser that talks to a publication on the server and keeps the data in sync.

---

## Cursor

A cursor is the result of running a query on a Mongo collection. On the client side, a cursor isn't just an array of results, but a reactive object that can be observed as objects in the relevant collection are added, removed and updated.

---

## Deps

Deps is Meteor's reactivity system. Deps is used behind the scenes to keep HTML automatically sync with the underlying data model.
