// server.js

const express = require('express');
const cors = require('cors');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

// 1. Configure the database and provide the default data in the constructor
const file = path.join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter, { items: [] }); // <-- Fix is here

// Create a function to initialize the database
async function initDB() {
  await db.read();

  // If the items array is empty, populate it with our initial data
  if (db.data.items.length === 0) {
    db.data.items.push(
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    );
    // Save the initial data to the file
    await db.write();
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

// --- API Endpoints ---

// Route to get all items
app.get('/api/items', (req, res) => {
  res.json(db.data.items);
});

// Route to add a new item
app.post('/api/items', async (req, res) => {
  const newItemName = req.body.name;
  if (!newItemName) {
    return res.status(400).send('Item name is required.');
  }

  const nextId = db.data.items.length > 0 ? Math.max(...db.data.items.map(item => item.id)) + 1 : 1;
  
  const newItem = {
    id: nextId,
    name: newItemName
  };

  db.data.items.push(newItem);
  await db.write();
  res.status(201).json(newItem);
});

// Route to delete an item
app.delete('/api/items/:id', async (req, res) => {
  const itemId = parseInt(req.params.id);
  
  const index = db.data.items.findIndex(item => item.id === itemId);

  if (index > -1) {
    db.data.items.splice(index, 1);
    await db.write();
    res.status(204).send();
  } else {
    res.status(404).send('Item not found.');
  }
});