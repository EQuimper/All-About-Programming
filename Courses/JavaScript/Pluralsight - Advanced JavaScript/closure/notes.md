# Closure

Closure absolutely on lexical scope.

Closure is when a function remembers it's lexical scope even when the function is executed outside this lexical scope.

```js
function foo () {
	var bar = 'bar';

	function baz () {
		console.log(bar);
	}

	bam(baz);
}

function bam (baz) {
	baz(); // bar
}

foo();
```

We can also return function from function.

```js
function foo () {
	var bar = 'bar';

	return function () {
		console.log(bar);
	};
}

function bam () {
	foo()(); // bar
}

bam();
```

### Closure is a necessary mechanism for a language with first class functions as values.

## Quiz

1. What is a closure and how is it created?

	A closure is when a function remembers and accessed it's lexical scope, even when that function is executed outside of it's lexical scope.

	He created when a inner function is transported outside of the outer function. 

2. How long does it's scope stay around?

	As long as there's some functions that still has a closure over the scope, that scope's going to stay around.

	Soon the closure goes away, the scope can get garbage collected.

3. Why doesn't a function callback inside a loop behave as expected? How do we fix it?

	We doesn't have a variable created per iteration.

	Can solved by:
		- Putting IIFE inside the iteration.
		- Let keyword.

4. How do you use a closure to create an encapsulated module? What's the benefits of that approach?

	- Has to be an outer-wrapping function.
	- Return one or more inner functions that have a closure over the scope.

	Benefits: Hiding stuff, the principle of least exposure.
