import express from 'express';

const articles = [
  { id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 },
  { id: 'a2', name: 'Scie', price: 5.5, qty: 7 },
];

const app = express.Router();

export default app;

app.get('/articles', (req, res) => {
  res.json(articles);
});