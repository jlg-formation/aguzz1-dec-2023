import { Injectable } from '@angular/core';
import { Article, Articles, NewArticle } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Articles = [
    { id: 'a1', name: 'Marteau', price: 2.99, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 5.5, qty: 7 },
  ];

  async add(newArticle: NewArticle): Promise<void> {
    const article: Article = { ...newArticle, id: window.crypto.randomUUID() };
    this.articles.push(article);
  }

  async refresh(): Promise<void> {}
}
