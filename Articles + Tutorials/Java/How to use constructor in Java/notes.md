A constructor allows you to provide initial values for class fields when you create the object. Suppose that you have a class named Actor that has fields named firstName and lastName. You can create a constructor for the Actor class:

```java
public Actor(String first, String last) {
  this.firstname = first;
  this.lastname= last;
}
```

Then you create an instance of the Actor class by calling this constructor:

```java
Actor a = new Actor("Arnold", " Schwarzenegger");
```

Like methods, constructors can be overloaded. In other words, you can provide more than one constructor for a class if each constructor has a unique signature. Here’s another constructor for the Actor class:

If you do not provide a constructor for a class, Java will automatically create a default constructor that has no parameters and doesn’t initialize any fields. This default constructor is called if you specify the new keyword without passing parameters.
