Example of await async

```js
var request = require('request');

function getQuote() {
  var quote;

  return new Promise(function(resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
      quote = body;

      resolve(quote);
    });
  });
}

async function main() {
  var quote = await getQuote();
  console.log(quote);
}

main();
console.log('Ron once said,');
```

We can actually improve this further by adding error handling with a try/catch block. If there is an error during the request we can then call the reject function of the promise which will be caught as an error inside of main. Like return statements, try/catch blocks were very underused in the past because they were hard to use correctly with asynchronous code.

```js
var request = require('request');

function getQuote() {
  return new Promise(function(resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
      if (error) return reject(error);
      resolve(body);
    });
  });
}

async function main() {
  try {
    var quote = await getQuote();
    console.log(quote);
  } catch(error) {
    console.error(error);
  }
}

main();
console.log('Ron once said,');
```
