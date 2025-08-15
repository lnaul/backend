const express = require('express');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5001;

// Use LowDB with a file adapter and provide a default data object
const file = path.join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const defaultData = { products: [] }; // Set a default data object
const db = new Low(adapter, defaultData); // Pass the default data here

// Use CORS to allow the frontend to access the API
app.use(cors());

// Define the API endpoint to get all products
app.get('/api/products', async (req, res) => {
  // Read the database file. If it doesn't exist, it will use the default data.
  await db.read();
  
  // Send the products as a JSON response
  res.json(db.data.products);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});