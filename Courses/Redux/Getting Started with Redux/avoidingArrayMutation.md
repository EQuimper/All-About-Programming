# Add

We need to use concat, because it doesn't modify the original object.

```javascript
const addCounter = (list) => {
    return [...list, 0];
};
```

# Delete

Don't take *splice* we need *slice*

```javascript
const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slcie(index + 1)
    ];
};
```
---

We will slice up to the item we want to increment, concat with a single item that we have incremented, then concat the rest of the original array.

```javascript
const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
};
```
