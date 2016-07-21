'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: {
    type: String,
    required: true, // default is false
    unique: true // useful for email etc
  },
  published: {
    type: Date,
    default: Date.now // for make sure the date is 
  },
  keywords: Array,
  author: {
    type: Schema.ObjectId, // For get the schema comming from a other one
    ref: 'User' // Important => User model
  },
  // Embedded sub-document
  // We can display the data: data.detail.modelNumber
  detail: {
    modelNumber: Number,
    hardCover: Boolean,
    reviews: Number,
    rank: Number
  }
})

module.exports = mongoose.model('Book', BookSchema);
