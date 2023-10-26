const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

app.use(express.json());

// Sample list of books (replace with your actual data source)
const books = [
  { id: 1, title: 'Book 1', author: 'Author A' },
  { id: 2, title: 'Book 2', author: 'Author B' },
  // Add more book objects as needed
];

app.get('/', (req, res) => {
  res.send('Hello, API World!');
});




// Route to get a list of books
app.get('/api/books', (req, res) => {
  // Send the list of books as a JSON response
  res.json(books);
});


// Get a specific book by ID
app.get('/api/books/:id', (req, res) => {
  // In this route, you would typically retrieve a specific book based on the provided ID.
  // You can access the book ID from the request parameters using req.params.id.
  const bookId = req.params.id;

  // Find the book with the matching ID (assuming you have a database or data source).
  // For this example, we'll create a placeholder book object.
  const book = { id: bookId, title: 'Sample Book', author: 'Sample Author' };

  // Send the specific book as a JSON response.
  res.json(book);
});

// Create a new book
app.post('/api/books', (req, res) => {

});

// Update a book by ID
app.put('/api/books/:id', (req, res) => {

});

// Delete a book by ID
app.delete('/api/books/:id', (req, res) => {

});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});