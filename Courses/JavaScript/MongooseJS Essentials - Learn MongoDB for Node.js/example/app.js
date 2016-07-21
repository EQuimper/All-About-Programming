var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Require the Book model
var Book = require('./Book.model');

// Connect the db
var db = 'mongodb://localhost/example';
mongoose.connect(db); // Don't forget to start the mongodb server with 'mongod'

var app = express(); // Create the app

app.use(bodyParser.json()); // Parse json element
app.use(bodyParser.urlencoded({
  extended: true
}));

var port = 8080;

// req is what you get from the user
// res is what we give to the user
app.get('/', function(req, res) { // This is the index route location
  res.send('Hello buddy');
});

// Mongoose queries

// Get all the books from the db and display it in json format
app.get('/books', function(req, res) {
  Book.find({})
    .exec(function(err, books){
      if (err) {
        res.send('error has occured');
      } else {
        res.json(books);
      }
    });
});

// Get one book with the params id
app.get('/books/:id', function(req, res) {
  Book.findOne({
   _id: req.params.id 
  })
  .exec(function(err, book) {
    if (err) {
      res.send('error');
    } else {
      res.json(book);
    }
  })
});

// Post a new book
app.post('/book', function(req, res) {
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save(function(err, book) {
    if (err) {
      res.send('error can\'t save the book');
    } else {
      res.send(book);
    }
  });
});

// Update a book
app.put('/book/:id', function(req, res) {
  Book.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: {
      title: req.body.title
    }}, {
      upsert: true
    },
    function(err, newBook) {
      if (err) {
        res.send('error');
      } else {
        res.send(newBook);
      }
    }
  )
});

// Delete a book
app.delete('/book/:id', function(req, res) {
  Book.findOneAndRemove({
    _id: req.params.id
  }, function(err, book) {
    if (err) {
      res.send('error');
    } else {
      res.status(204);
    }
  })
});

app.listen(port, function() {
  console.log('Listen in port', port);
});
