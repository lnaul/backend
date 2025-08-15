const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;

// Product data with 9 items
const products = [
  {
    id: 1,
    name: "Pikachu Plush",
    price: 19.99,
    image: "https://user-images.githubusercontent.com/9783935/133737527-2e219717-31a8-4447-9df0-76077759d57a.png"
  },
  {
    id: 2,
    name: "Charmander Toy",
    price: 24.99,
    image: "https://user-images.githubusercontent.com/9783935/133738092-23b9d084-569d-4720-80a2-2d1c37d7a752.png"
  },
  {
    id: 3,
    name: "Bulbasaur Figure",
    price: 15.99,
    image: "https://user-images.githubusercontent.com/9783935/133738596-f98b965c-6b58-48b0-8a1a-471017d23a4b.png"
  },
  {
    id: 4,
    name: "Squirtle Toy",
    price: 21.50,
    image: "https://user-images.githubusercontent.com/9783935/133739077-0130f40d-2b73-40e9-a4f6-805e26372558.png"
  },
  {
    id: 5,
    name: "Jigglypuff Plush",
    price: 18.00,
    image: "https://user-images.githubusercontent.com/9783935/133739774-72b22d9c-1960-4f51-b0e2-652f144d1867.png"
  },
  {
    id: 6,
    name: "Snorlax Plush",
    price: 35.99,
    image: "https://user-images.githubusercontent.com/9783935/133740263-6d0a7a33-f571-419b-a010-85f573f32441.png"
  },
  {
    id: 7,
    name: "Psyduck Toy",
    price: 20.00,
    image: "https://user-images.githubusercontent.com/9783935/133740700-023a886a-7738-4e1b-b461-12f5e3e2c39e.png"
  },
  {
    id: 8,
    name: "Meowth Plush",
    price: 16.99,
    image: "https://user-images.githubusercontent.com/9783935/133741088-372070d6-1b4d-4e9b-9807-6953934f8287.png"
  },
  {
    id: 9,
    name: "Mewtwo Figure",
    price: 59.99,
    image: "https://user-images.githubusercontent.com/9783935/133741369-19e34b9d-4c33-4f9e-990e-1f81a7d65604.png"
  }
];

// Middleware to enable CORS
app.use(cors());

// A simple GET route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

// GET route for the products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});