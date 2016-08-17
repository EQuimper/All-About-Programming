Two questions may arise:

- Is it necessary to call super() inside constructor?
- What is the difference between callling super() and super(props)?

# Answer 1

Calling super() is necessary only if you need to have a constructor.

The reason why this cannot be allowed before super() is because this is uninitialized if super() is not called

ES6 class constructors MUST call super if they are subclasses. Thus, you have to call super() as long as you have a constructor. (But a subclass does not have to have a constructor)

# Answer 2

The effect of passing `props` when calling super() allows you to access `this.props` in the constructor

```js
class MyClass extends React.component{
    constructor(props){
        super();
        console.log(this.props); // this.props is undefined

    }
}
```

To fix it:

```js
class MyClass extends React.component{
    constructor(props){
        super(props);
        console.log(this.props); // prints out whatever is inside props

    }
}
```

There is no need to pass `props` into the constructor if you want to use it in other places. Because React automatically set it for you
