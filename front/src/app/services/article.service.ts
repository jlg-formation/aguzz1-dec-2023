import { Injectable } from '@angular/core';
import { Articles } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Articles = [
    { id: 'a1', name: 'Marteau', price: 2.99, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 5.5, qty: 7 },
  ];
}
