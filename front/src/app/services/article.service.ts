import { Injectable } from '@angular/core';
import { Article, Articles, NewArticle } from '../interfaces/article';
import { sleep } from '../misc';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Articles = [
    { id: 'a1', name: 'Marteau', price: 2.99, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 5.5, qty: 7 },
  ];

  async add(newArticle: NewArticle): Promise<void> {
    await sleep(2000);
    const article: Article = { ...newArticle, id: window.crypto.randomUUID() };
    this.articles.push(article);
  }

  async refresh(): Promise<void> {}

  async remove(ids: string[]): Promise<void> {
    this.articles = this.articles.filter((a) => !ids.includes(a.id));
  }
}
