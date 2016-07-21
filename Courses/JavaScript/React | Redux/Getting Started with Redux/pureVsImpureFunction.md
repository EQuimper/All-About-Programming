### Pure

Pure functions are those whose return values depend only upon the values of their arguments.

```javascript
function square(x) {
    return x * x;
}

function squareAll(items) {
    return items.map(square);
}
```

### Impure

```javascript
function square(x) {
    updateXInDatabase(x);
    return x * x;
}

function squareAll(items) {
    for (let i = o; i < items.length; i++) {
        items[i] = square(items[i]);
    }
}
```
