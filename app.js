const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Movie = require('./db/models/movie.js');

app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  Movie.find()
    .then((movies) => res.status(200).send(movies))
    .catch((err) => res.status(400).send(err));
});

app.post('/movies', (req, res) => {
 
  const movie = new Movie({   
    name:req.body.name,
    desc:req.body.desc
})
  movie.save(movie)
    .then((movie) => res.status(201).send(movie))
    .catch((err) => res.status(400).send(err));
});

module.exports = app;
