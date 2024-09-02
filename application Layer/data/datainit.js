// dataInit.js

const mongoose = require('mongoose');
const Book = require('../modules/book'); // Adjust the path as necessary
const books = require('./data');

const MONGODB_URI = "mongodb://127.0.0.1:27017/bookstore"; // Replace with your actual MongoDB URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    // Insert the books data
    return Book.insertMany(books);
  })
  .then((insertedBooks) => {
    console.log(`Inserted ${insertedBooks.length} books successfully.`);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error inserting books:", error);
  });
