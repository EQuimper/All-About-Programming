# What is JSON? JavaScript Object Notation

- Format for sharing data
- Derived from JavaScript
- Language independent
- An alternative to XML

# Advantages

- Easy to read
- Easy to parse
- Leaner than XML
- Growing support in APIs
- Natural format for JavaScript

# Understanding JSON and Objects

- JSON keys wrapped in "quotes"
- JSON keys can be any valid string
- JSON values have to be one of six data types:
    - strings
    - numbers
    - objects
    - arrays
    - booleans
    - null

# JavaScript Objects

- Quotes on keys not necessary
- JavaScript Object can be any data type

# Parsing JSON

`var info = JSON.parse(data);`

`var infoString = JSON.stringify(info);`

- JSON has to be parsed into JavaScript
- Can be done using `eval('(' + data + ')');` or `JSON.parse()`
- JSON.stringify does the opposity of parse
- A library like jQuery can be helpful

# Creating simple data

### Keys & values

```js
var info = {
    "full_name": "Emanuel Quimper",
    "title": "Mr",
    "qty": 3
}
```
- Multiple values separated with commas
- Whitespace for clarity
- No quotes on:
    - numbers
    - true
    - false
    - null
- Normally accessed through dot notation
- You can also use the [] notation

#### Arrays

- Lists created with brackets
- Accesed via an index number

If we want to organize the data, much better to make it an array them a object.
