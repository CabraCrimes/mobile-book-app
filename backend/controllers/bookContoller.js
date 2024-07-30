const Book = require('../models/bookModel');
const admin = require('../config/firebaseConfig');

//Get all books
const getAllBooks = async (req, res) => {
  try {
    const booksSnapshot = await admin.collection('books').get();
    console.log('SNAPSHOT', booksSnapshot)
    const bookArray = [];
    if (booksSnapshot.empty) {
      res.status(400).send('No books found');
    } else {
      booksSnapshot.forEach((doc) => {
        const book = new Book(
          doc.id,
          doc.data().title,
          doc.data().author,
          doc.data().rating,
          doc.data().genre,
          doc.data().summary,
        );
        bookArray.push(book);
      });
      res.status(200).send(bookArray);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Create a book
const createBook = async (req, res) => {
  if (!req?.body?.title || !req?.body?.author || !req?.body?.rating || !req?.body?.genre || !req?.body?.summary ) {
    return res.status(400).json({ message: "Missing field(s): title, author, rating, genre, summary is required" });
  }
  try {
    const data = req.body;
    await admin.collection('books').add(data);
    res.status(201).json('Book created successfully');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a book
const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const bookDoc = admin.collection('books').doc(id);
    const data = await bookDoc.get();
    if (data) {
      res.status(200).json(data.data());  
    } else {
      res.status(404).json({ message: 'Book not found' });  
    }
  } catch (error) {
    res.status(400).json({ error: error.message });  
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const bookDoc = admin.collection('books').doc(id);
    await bookDoc.update(data);

    res.status(200).json({ message: 'Book updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
    try {
        const id = req.params.id
    if (!id) return res.status(204).json({ message: `Book ID ${req.params.id} not found` });
    await admin.collection('books').doc(id).delete();
    res.status(200).json('Book deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error retrieving book' });
    }
}

module.exports = { getAllBooks, createBook, updateBook, getBook, deleteBook };
