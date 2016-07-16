# What is a promise

A promise represents the eventual result
of an asynchronous operation.

A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

# What's wrong with callbacks ?

Instead of values, we have function calls, which can be really cumbersome to coordinate.

# Promise give

- More clean code
- Back to thinking about functions and values
- If we failure Promise give use the reason why

# Promise: Asynchronous Value

1. Pending (no value)
2. Fulfilled (value)
3. Rejected (reason)

A Promise is a little immutable object.

# (ES6) Promise Operations

Creating a new promise
```js
new promise((resolve, reject) =>)
```

Async the access to value/reason
```js
promise.then((val) => , (err) =>)
```

Wait for several promises
```js
Promise.all([promise, ...])
```

Wait for the first promise
```js
Promise.race([promise, ...])
```

Example:

```js
var email = getUser(name)
    .then(function(user) {
        return user.email;
    })
    .catch(function(err) {
        log.error({err: err}, '...');
        throw new BadUsername();
    });
```

```js
var g = getUser(name)
    .then(function(user) {
        return getGravatar(user.email);
    });
```

```js
var info = getUser(name)
    .then(function(user) {
        return Promise.all([
            user,
            getGravatar(user.email),
            getTwitter(user.twitterHanlde),
            getGithub(user.gitubName)
        ]);
    })
```
