// 1. We need to require the library
var mongoose = require('mongoose');

// 2. We set a variable for set the Schema
var Schema = mongoose.Schema;

// 3. Then we create the schema
var BookSchema = new Schema({
  title: String,
  keywords: Array,
  published: Boolean
});
 
// 4. We need to create a instance for using it
module.exports = mongoose.model('Book', BookSchema);

// We can use the model in the other file simply by requiring this one

// 5. Start a connection with MongoDB
var myDB = 'mongodb://localhost/<dbName>'; // the name can be anything we want

// 6. Connect with the api
mongoose.connect(myDB);

// 7. Make sure we always have "mongod" running in a other terminal
