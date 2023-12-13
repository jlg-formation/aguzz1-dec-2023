import { Injectable } from '@angular/core';
import { Article, Articles, NewArticle } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Articles | undefined = undefined;

  async add(newArticle: NewArticle): Promise<void> {
    const article: Article = { ...newArticle, id: window.crypto.randomUUID() };
    this.articles?.push(article);
  }

  async refresh(): Promise<void> {}

  async remove(ids: string[]): Promise<void> {
    this.articles = this.articles?.filter((a) => !ids.includes(a.id));
  }
}
