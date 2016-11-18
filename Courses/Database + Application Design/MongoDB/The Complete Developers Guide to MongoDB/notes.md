Mongo let us using multiple db for multiple project

Inside a DB Mongo base storage with collections

Mongoose let us using Promise

Mongoose his a api you let us using mongo more nicely

418-380-2788

# Validation

Example of schema

```js
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  postCount: { type: Number, default: 0 }
});
```

Here make the name required and the string is the message we pass if no name

Example of validation

```js
const user = new User({ name: undefined });
const validationResult = user.validationSync();
```

The kind of errors we got back is that we the message in that. This is the stack trace coming from Mongoose

```
errors:
   { name:
      { MongooseError: Name is required.
          at ValidatorError (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mongoose/lib/schematype.js:775:13)
          at /Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mongoose/lib/schematype.js:803:9
          at Array.forEach (native)
          at SchemaString.SchemaType.doValidateSync (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mongoose/lib/schematype.js:788:14)
          at /Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mongoose/lib/document.js:1425:17
          at Array.forEach (native)
          at model.Document.validateSync (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mongoose/lib/document.js:1409:9)
          at Context.it (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/test/validation_test.js:7:35)
          at callFn (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runnable.js:343:21)
          at Test.Runnable.run (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runnable.js:335:7)
          at Runner.runTest (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runner.js:444:10)
          at /Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runner.js:550:12
          at next (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runner.js:361:14)
          at /Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runner.js:371:7
          at next (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runner.js:295:14)
          at Immediate.<anonymous> (/Users/emanuelquimper/TUTORIAL/mongo-complete-course/users/node_modules/mocha/lib/runner.js:339:5)
          at runCallback (timers.js:637:20)
          at tryOnImmediate (timers.js:610:5)
          at processImmediate [as _immediateCallback] (timers.js:582:5)
        message: 'Name is required.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'required',
        path: 'name',
        value: undefined } } }
```

For get the message we can run

```js
const { message } = validationResult.errors.name;
```

# Relation

