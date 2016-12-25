# Node.js Async Await in ES7

The new `async/await` syntax allows you to still use `Promises`, but it eliminates the need for providing a callback to the chained `then()` methods. The value that would have been sent to the `then()` callback is instead returned directly from the asynchronous function, just as if it were a synchronous blocking function.

```js
async function main() {
  var body = await request.get('https://api.github.com/repos/scottwrobinson/camo');
  console.log('Body:', body);
}
main();
```

```js
async function getCamoJson() {
  var options = {
    url: 'https://api.github.com/repos/scottwrobinson/camo',
    headers: {
      'User-Agent': 'YOUR-GITHUB-USERNAME'
    }
  };
  return await request.get(options);
}

var body = await getCamoJson();
```
