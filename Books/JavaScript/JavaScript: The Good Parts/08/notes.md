JavaScript includes a small set of standard methods that are available on the stan- dard types.

# Array

## Concat

The concat method produces a new array containing a shallow copy of this array with the items appended to it.

```js
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]
```

## Join

The join method makes a string from an array.

```js
var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join('');    // c is 'abcd';
```

## Pop

The pop and push methods make an array work like a stack. The pop method removes and returns the last element in this array.

```js
var a = ['a', 'b', 'c'];
var c = a.pop(); // a is ['a', 'b'] & c is 'c'
```

## Push

The push method appends items to the end of an array. Unlike the concat method, it modifies the array and appends array items whole. It returns the new length of the array.

```js
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5;
```

## Reverse

The reverse method modifies the array by reversing the order of the elements. It returns the array.

```js
var a = ['a', 'b', 'c'];
var b = a.reverse();
// both a and b are ['c', 'b', 'a']
```

## Shift

The shift method removes the first element from an array and returns it. If the array is empty, it returns undefined. shift is usually much slower than pop.

```js
var a = ['a', 'b', 'c'];
var c = a.shift(); // a is ['b', 'c'] & c is 'a'
```

## Slice

The slice method makes a shallow copy of a portion of an array. The first element copied will be array[start]. It will stop before copying array[end]. The end parameter is optional, and the default is array.length.

```js
var a = ['a', 'b', 'c'];
var b = a.slice(0, 1);
var c = a.slice(1);
var d = a.slice(1, 2);
// b is ['a']
// c is ['b', 'c']
// d is ['b']
```

## Sort

The sort method sorts the contents of an array in place. It sorts arrays of numbers
incorrectly.

```js
var n = [4, 8, 15, 16, 23, 42];
n.sort();
// n is [15, 16, 23, 4, 42, 8]
```

JavaScript’s default comparison function assumes that the elements to be sorted are strings. It isn’t clever enough to test the type of the elements before comparing them, so it converts the numbers to strings as it compares them, ensuring a shockingly incorrect result.

```js
n.sort(function (a, b) {
    return a - b;
});
// n is [4, 8, 15, 16, 23, 42];
```

## Splice

The splice method removes elements from an array, replacing them with new items. The start parameter is the number of a position within the array. The deleteCount parameter is the number of elements to delete starting from that position. If there are additional parame- ters, those items will be inserted at the position. It returns an array containing the deleted elements. The most popular use of splice is to delete elements from an array.

```js
var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug');
// a is ['a', 'ache', 'bug', 'c']
// r is ['b']
```

## UnShift

The unshift method is like the push method except that it shoves the items onto the front of this array instead of at the end. It returns the array’s new length.

```js
var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');
// a is ['?', '@', 'a', 'b', 'c']
// r is 5
```

---

# Function

## Apply

The apply method invokes a function, passing in the object that will be bound to this and an optional array of arguments.

---

# Number

## ToExponential

The toExponential method converts this number to a string in the exponential form. The optional fractionDigits parameter controls the number of decimal places. It should be between 0 and 20.

## ToFixed

The toFixed method converts this number to a string in the decimal form.

## ToPrecision

The toPrecision method converts this number to a string in the decimal form.

## ToString

The toString method converts this number to a string.

---

# Object

## HasOwnProperty

The hasOwnProperty method returns true if the object contains a property having the name. The prototype chain is not examined.

---

# RegExp

## Exec

The exec method is the most powerful (and slowest) of the methods that use regular expressions. If it successfully matches the regexp and the string, it returns an array.

## Test

The test method is the simplest (and fastest) of the methods that use regular expressions. If the regexp matches the string, it returns true; otherwise, it returns false.

---

# String

## CharAt

The charAt method returns the character at position pos in this string. If pos is less than zero or greater than or equal to string.length, it returns the empty string.

```js
var name = 'Curly';
var initial = name.charAt(0); // initial is 'C'
```

## CharCodeAt

The charCodeAt method is the same as charAt except that instead of returning a string, it returns an integer representation of the code point value of the character at position pos in that string.

```js
var name = 'Curly';
var initial = name.charCodeAt(0); // initial is 67
```

## Concat

The concat method makes a new string by concatenating other strings together. It is rarely used because the + operator is more convenient.

```js
var s = 'C'.concat('a', 't'); // s is 'Cat'
```

## IndexOf

The indexOf method searches for a searchString within a string. If it is found, it returns the position of the first matched character; otherwise, it returns –1. The optional position parameter causes the search to begin at some specified position in the string.

```js
var text = 'Mississippi';
var p = text.indexOf('ss');
p = text.indexOf('ss', 3);
p = text.indexOf('ss', 6);
// p is 2
// p is 5
// p is -1
```

## LastIndexOf

The lastIndexOf method is like the indexOf method, except that it searches from the end of the string instead of the front.

```js
var text = 'Mississippi';
var p = text.lastIndexOf('ss');
p = text.lastIndexOf('ss', 3);
p = text.lastIndexOf('ss', 6);
// p is 5
// p is 2
// p is 5
```

## LocaleCompare

The localCompare method compares two strings. The rules for how the strings are compared are not specified. If this string is less than that string, the result is negative. If they are equal, the result is zero.

```js
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
    m.sort(function (a, b) {
    return a.localeCompare(b);
});
// m (in some locale) is
// ['a', 'A', 'aa', 'Aa', 'aaa', 'AAA']
```

## Match

The match method matches a string and a regular expression. How it does this depends on the g flag. If there is no g flag, then the result of calling string.match(regexp) is the same as calling regexp.exec(string). However, if the regexp has the g flag, then it produces an array of all the matches but excludes the capturing groups.

## Replace

The replace method does a search and replace operation on this string, producing a new string. If searchValue is a regular expression and if it has the g flag, then it will replace all occur- rences. If it does not have the g flag, then it will replace only the first occurrence.

## Search

The search method is like the indexOf method, except that it takes a regular expression object instead of a string. It returns the position of the first character of the first match, if there is one, or –1 if the search fails.

```js
var text = 'and in it he says "Any damn fool could';
var pos = text.search(/["']/); // pos is 18
```

## Slice

The slice method makes a new string by copying a portion of another string. If the start parameter is negative, it adds string.length to it. The end parameter is optional, and its default value is string.length.

## Split

The split method creates an array of strings by splitting this string into pieces. The optional limit parameter can limit the number of pieces that will be split. The separator parameter can be a string or a regular expression.

## Substring

The substring method is the same as the slice method except that it doesn’t handle the adjustment for negative parameters. There is no reason to use the substring method. Use slice instead.

## ToLowerCase

The toLowerCase method produces a new string that is made by converting this string to lowercase.

## ToUpperCase

The toUpperCase method produces a new string that is made by converting this string to uppercase.

## FromCharCode

The String.fromCharCode function produces a string from a series of numbers.

```js
var a = String.fromCharCode(67, 97, 116);
// a is 'Cat'
```
