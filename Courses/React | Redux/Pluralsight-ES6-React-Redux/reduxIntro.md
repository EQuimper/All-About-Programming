# What is Mutable in JS

Immutable already | Mutable
--- | ---
Number | Object
String | Arrays
Boolean | Functions
Undefined |
Null |

Example of changing the state Immutable
> Deep Copy

```javascript
Object.assign({}, state, { role: 'admin' });
```

# Why immutability ?
1. Clarity
2. Performance
3. Awesome Sauce ( Amazing Debugging )

## Handling Immutable State

ES6
- spread `...`
- `Object.assign()`
