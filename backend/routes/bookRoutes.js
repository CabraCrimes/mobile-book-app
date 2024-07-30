const express = require('express');
const router = express.Router();
const bookContoller = require('../controllers/bookContoller');

router.route('/books')
    .get(bookContoller.getAllBooks)
    .post(bookContoller.createBook);

router.route('/:id')
    .get(bookContoller.getBook)
    .put(bookContoller.updateBook)
    .delete(bookContoller.deleteBook);

module.exports = router;
