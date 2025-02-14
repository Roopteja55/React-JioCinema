const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Read movie data
let movies = JSON.parse(fs.readFileSync("movies_data.json", "utf-8"));

// Get all movies
app.get("/movies", (req, res) => {
  res.send(movies);
});

// Get a movie by ID
app.get("/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  movie ? res.json(movie) : res.status(404).json({ message: "Movie not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
