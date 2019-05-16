const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const validate = require('./validate');

app.use(express.json());

const lessons = [
  { id: 1, lesson: 'lesson 1' },
  { id: 2, lesson: 'lesson 2' },
  { id: 3, lesson: 'lesson 3' }
];

app.get('/', (req, res) => res.send('Hello World'));

app.get('/api/lessons/', (req, res) => res.send(lessons));

app.get('/api/lessons/:id', (req, res) => {
  const lesson = lessons.find(l => l.id === parseInt(req.params.id));
  if (!lesson) res.status(404).send('The lesson ID given was not found');
  res.send(lesson);
});

app.post('/api/lessons', (req, res) => {
  validate(req, res);
  const lesson = {
    id: lessons.length + 1,
    lesson: req.body.lesson
  };
  lessons.push(lesson);
  res.send(lesson);
});

app.put('/api/lessons/:id', (req, res) => {
  validate(req, res);
  const lesson = lessons.find(l => l.id === parseInt(req.params.id));
  if (!lesson) res.status(404).send('The lesson ID given was not found');
  lesson.lesson = req.body.lesson;
  res.send(lesson);
});

app.delete('/api/lessons/:id', (req, res) => {
  const lesson = lessons.find(l => l.id === parseInt(req.params.id));
  if (!lesson) res.status(404).send('The lesson ID given was not found');
  const index = lessons.indexOf(lesson);
  lessons.splice(index, 1);
  res.send(lesson);
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
