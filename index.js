const express = require('express');
const validate = require('./validate.js');
const mongoose = require('mongoose');
const moviesRouter = require('./routes/movies.js');
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/movies';
const db = mongoose.connection;

app.use(express.static('public'));

mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true }
);
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Databse'));
app.use(express.json());
app.use('/movies', moviesRouter);
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

// const lessons = [
//   { id: 1, lesson: 'lesson 1' },
//   { id: 2, lesson: 'lesson 2' },
//   { id: 3, lesson: 'lesson 3' }
// ];
// //GET ROUTE
// app.get('/', (req, res) => res.send('Hello World'));
// //GET ROUTE
// app.get('/api/lessons/', (req, res) => res.send(lessons));
// //GET ROUTE
// app.get('/api/lessons/:id', (req, res) => {
//   const lesson = lessons.find(l => l.id === parseInt(req.params.id));
//   if (!lesson) res.status(404).send('The lesson ID given was not found');
//   res.send(lesson);
// });
// //POST ROUTE
// app.post('/api/lessons', (req, res) => {
//   validate(req, res);
//   const lesson = {
//     id: lessons.length + 1,
//     lesson: req.body.lesson
//   };
//   lessons.push(lesson);
//   res.send(lesson);
// });
// //PUT ROUTE
// app.put('/api/lessons/:id', (req, res) => {
//   validate(req, res);
//   const lesson = lessons.find(l => l.id === parseInt(req.params.id));
//   if (!lesson) res.status(404).send('The lesson ID given was not found');
//   lesson.lesson = req.body.lesson;
//   res.send(lesson);
// });
// //DELETE ROUTE
// app.delete('/api/lessons/:id', (req, res) => {
//   const lesson = lessons.find(l => l.id === parseInt(req.params.id));
//   if (!lesson) res.status(404).send('The lesson ID given was not found');
//   const index = lessons.indexOf(lesson);
//   lessons.splice(index, 1);
//   res.send(lesson);
// });
