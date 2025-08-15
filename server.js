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
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    id: 2,
    name: "Charmander Toy",
    price: 24.99,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    id: 3,
    name: "Bulbasaur Figure",
    price: 15.99,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    id: 4,
    name: "Squirtle Toy",
    price: 21.50,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    id: 5,
    name: "Jigglypuff Plush",
    price: 18.00,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
  },
  {
    id: 6,
    name: "Snorlax Plush",
    price: 35.99,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
  },
  {
    id: 7,
    name: "Psyduck Toy",
    price: 20.00,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
  },
  {
    id: 8,
    name: "Meowth Plush",
    price: 16.99,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"
  },
  {
    id: 9,
    name: "Mewtwo Figure",
    price: 59.99,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
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

