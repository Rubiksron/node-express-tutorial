import { monitorEventLoopDelay } from 'perf_hooks';

app.get('/api/lessons/:id', function(req, res) {
  const lesson = lessons.find(function(c) {
    return c.id === parseInt(req.params.id);
  });
  if (!lesson) {
    res.status(404).send('The lesson ID provided was not found');
  }
  res.send(lesson);
});

app.post('/api/lessons', function(req, res) {
  if (!req.body.lesson || req.body.lesson.length < 3) {
    res
      .status(404)
      .send('lesson required and should be a minimum of 3 characters long.');
    return;
  }
  const lesson = {
    id: lessons.length + 1,
    lesson: req.body.lesson
  };
  lessons.push(lesson);
  res.send(lesson);
});

app.put('/api/lessons/:id', function(req, res) {
  const lesson = lessons.find(function(l) {
    return l.id === parseInt(req.params.id);
  });
  if (!lesson) {
    res.status(404).send('The lesson ID given was not found');
  }

  if (req.body.lesson.length < 3) {
    res
      .status(400)
      .send('lesson required and should be at least characters long.');
    return;
  }

  lesson.lesson = req.body.lesson;
  res.send(lesson);
});

app.delete('/api/lessons/:id', function(req, res) {
  const lesson = lessons.find(function(l) {
    return l.id === parseInt(req.params.id);
  });
  if (!lesson) {
    res.status(404).send('The lesson ID given was not found');
  }
  const index = lessons.indexOf(lesson);
  lessons.splice(index, 1);
  res.send(lesson);
});

//MOVIE.JS
movie.js;

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieDirector: {
    type: String,
    required: true
  },
  movieTitle: {
    type: String,
    required: true
  },
  movieDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Movie', movieSchema);

//MOVIES.JS

const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');
//GET ALL MOVIES
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//GET ONE MOVIE
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});
//POST MOVIE
router.post('/', async (req, res) => {
  const movie = new Movie({
    movieDirector: req.body.movieDirector,
    movieTitle: req.body.movieTitle
  });
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//UPDATE ONE
router.patch('/:id', (req, res) => {});
//DELETE ONE
router.delete('/:id', (req, res) => {});
module.exports = router;

//THESE ARE THE ROUTES FROM MOVIES.JS
//GET ALL MOVIES
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//GET ONE MOVIE
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});
//POST MOVIE
router.post('/', async (req, res) => {
  const movie = new Movie({
    movieDirector: req.body.movieDirector,
    movieTitle: req.body.movieTitle
  });
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//UPDATE ONE
router.patch('/:id', (req, res) => {});
//DELETE ONE
router.delete('/:id', (req, res) => {});
