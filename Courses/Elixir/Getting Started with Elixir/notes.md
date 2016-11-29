`iex` for running the command line for elixir

i is for inspect

```elixir
i 5*5

Term
  25
Data type
  Integer
Reference modules
  Integer
```

```elixir
i 10/5

Term
  2.0
Data type
  Float
Reference modules
  Float
```

The `/` always return Float

if we want to div not float we `div(10, 5)`

For reminder we can `rem(10, 5)`

With big number we can use `1_000_000_000` and this is one billion nothing change just easier to read.

---

# Other types

---

## Atoms

*A constant where its name is also its value*

Example of atoms are the return values
```elixir
{:ok, content}
{:error, reason}
```
#### Why we use them alot ?

**Atoms are very memory efficient**

In elixir we don't really have a boolean type so we use boolean atoms

```elixir
:true
:false
```

```elixir
iex(6)> i true
Term
  true
Data type
  Atom
Reference modules
  Atom
iex(7)> i false
Term
  false
Data type
  Atom
Reference modules
  Atom
iex(8)>
```

we can use `:nil` atoms too

`:nil` and `:false` are falsy value

`||` mean or

---

## String

For concat string we can use `<>`

```elixir
iex(10)> hello = "Hello, "
"Hello, "
iex(11)> name = "Emanuel"
"Emanuel"
iex(12)> hello <> name
"Hello, Emanuel"
iex(13)>
```

Like javascript with `${variable}` we can use `#{variable}`

```elixir
iex(13)> handle = "QuimperEmanuel"
"QuimperEmanuel"
iex(14)> "My twitter handle is @#{handle}. Feel free send me a message"
"My twitter handle is @QuimperEmanuel. Feel free send me a message"
iex(15)>
```

Here we receive only the binary number not the string himself

```elixir
iex(17)> numbers = [1, 2, 3]
[1, 2, 3]
iex(18)> "Test: #{numbers}"
<<84, 101, 115, 116, 58, 32, 1, 2, 3>>
```

---

## Tuples

Examples of Tuples

```elixir
iex(1)> book = {"Programming Elixir", "Dave Thomas", 25.00}
{"Programming Elixir", "Dave Thomas", 25.0}
```

We can take the element from a tuples like this

```elixir
iex(3)> elem(book, 2)
25.0
```

We can updated value of tuples like this.

```elixir
iex(5)> put_elem(book, 2, 40.00)
{"Programming Elixir", "Dave Thomas", 40.0}
```

But that create a new tuples not updated the one. All is immutable.

```elixir
iex(5)> put_elem(book, 2, 40.00)
{"Programming Elixir", "Dave Thomas", 40.0}
iex(6)> book
{"Programming Elixir", "Dave Thomas", 25.0}
```

`=` sign in elixir are not an assignment operator. Its a match operator.

Pattern matching

```elixir
iex(10)> {title, author, value} = book
{"Programming Elixir", "Dave Thomas", 25.0}
iex(11)> title
"Programming Elixir"
```

We need to have the same amount of pattern matching in the left than the right have

```elixir
iex(12)> {title2, author2} = book
** (MatchError) no match of right hand side value: {"Programming Elixir", "Dave Thomas", 25.0}
```

But we can use the `_`

```elixir
iex(12)> {title3, _, value3} = book
{"Programming Elixir", "Dave Thomas", 25.0}
```

---

## Lists

This is a list

```elixir
iex(1)> first_list = [1, 2, 3]
[1, 2, 3]
```

No need to be just string etc. Can be string, atoms number etc

HEAD and TAIL

```elixir
iex(2)> hd(first_list)
1
iex(3)> tl(first_list)
[2, 3]
```

Faster to add other element in the head of the list like

```elixir
iex(4)> [:ok | first_list]
[:ok, 1, 2, 3]
```

We can use HEAD and TAIL for pattern matching too

```elixir
iex(5)> [head | tail] = first_list
[1, 2, 3]
iex(6)> head
1
iex(7)> tail
[2, 3]
```

---

## Immutability

```elixir
iex(1)> languages = ["python", "javascript", "ruby"]
["python", "javascript", "ruby"]
iex(2)> languages
["python", "javascript", "ruby"]
iex(3)> List.insert_at(languages, 0, "C#")
["C#", "python", "javascript", "ruby"]
iex(4)> languages
["python", "javascript", "ruby"]
```

#### Benefits of Immutability

- Concurrency
- Efficient Memory Use

But we can reassign variable

```elixir
iex(5)> counter = 1
1
iex(6)> counter = counter + 1
2
iex(7)> counter
2
```

```elixir
iex(8)> languages
["python", "javascript", "ruby"]
iex(9)> languages = List.insert_at(languages, 0, "C#")
["C#", "python", "javascript", "ruby"]
iex(10)> languages
["C#", "python", "javascript", "ruby"]
```

---

## Directives Comparison

#### Import

- Include module functions
- Include/Exclude specific functions

#### Alias

- Reduce typing
- Rename a module in your module

#### Require

- Allows using macros in your module

---

In elixir function are first class citizen

### First Class Citizen

supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables.

---

## Branching Logic

- If
- Cond
- Case

---
