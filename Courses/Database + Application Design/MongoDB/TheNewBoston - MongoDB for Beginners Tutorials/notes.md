`$gt` Greater then
`$gte` Greater then or equal

`$lt` Less then
`$lt` Less then or equal

`$or` Give me result where they have one of the arguments.

Example:

```js
db.players.find({
	$or: [
		{"position": "Left Wing"},
		{"position": "Right Wing"},
	]
})
```

Example if we want only some stuff coming from the search.

```js
db.players.find(
	{"position": "Center"},
	{"name": 1}
)
```
Here we get only the name coming but with the id too. If we dont want the id we need to write:

```js
db.players.find(
	{"position": "Center"},
	{"name": 1, _id: 0}
)
```

We can limit the query with the add of `.limit(number)`
