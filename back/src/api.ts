import express, { json } from 'express';
import { Article, NewArticle } from './interfaces/article';
import { randomUUID } from 'node:crypto';

let articles = [
  { id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 },
  { id: 'a2', name: 'Scie', price: 5.5, qty: 7 },
];

const app = express.Router();

export default app;

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Methods', '*');
  next();
});

app.use(json());

app.get('/articles', (req, res) => {
  res.json(articles);
});

app.post('/articles', (req, res) => {
  // recuperer le nouvel article body
  // generer un id pour l'article
  // ajouter l'article au tableau
  const newArticle: NewArticle = req.body;
  const article: Article = { ...newArticle, id: randomUUID() };
  articles.push(article);
  res.status(201).end();
});

app.delete('/articles', (req, res) => {
  // recuperer les ids du body
  // filtre les articles
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});
