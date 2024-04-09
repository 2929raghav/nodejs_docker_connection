import express from 'express';

// Create an Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
   res.send('Hello, world! This is the homepage.');
});

// Define a route for /about
app.get('/about', (req, res) => {
  res.send('About page - This is where you can learn about us.');
});

// Define a route for /contact
app.get('/contact', (req, res) => {
  res.send('Contact page - Get in touch with us!');
});

// Define a route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Start the server
const PORT = 3000; // You can change the port number if needed
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
