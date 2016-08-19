# RainSoft - How three dots changed JavaScript

## Three dots

**The rest operator** is used to get the arguments list passed to function on invocation and in array destructure. A case when the operator gathers the rest remained after the operation.

**The spread operator** is used for array construction and destructuring, and to fill function arguments from an array on invocation. A case when the operator spreads the array (or iterable object) elements.

## Improved array manipulation

The spread operator improves array literals by allowing to insert on the fly another arrays (or any other iterables) into the initialized instance. 

## Array destructure

As a part of the destructuring, the rest operator extracts parts of an array. The extraction result is always an array.

```js
var seasons = ['winter', 'spring', 'summer', 'autumn'];  
var coldSeason, otherSeasons;  
[coldSeason, ...otherSeasons] = seasons;
console.log(coldSeason);   // => 'winter'  
console.log(otherSeasons); // => ['spring', 'summer', 'autumn'] 
```

`[coldSeason, ...otherSeasons]` extracts the first item 'winter' into coldSeason variable and the rest of elements into otherSeasons array.
