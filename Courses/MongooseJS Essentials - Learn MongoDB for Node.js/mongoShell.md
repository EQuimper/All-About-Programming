# Inside the shell

- Use the db

> use example

- See all the collections inside this db

> show collections

- See all the item inside a collections

> db.books.find()

- Or for see more easy the item in collection

> db.books.find().pretty() 

The Book is automatically add to the db when we start the server and
mongodb take the single capitalize word Book and transform it into
a pluralize lowercase

- MongoDB add automatically a id to a new item
