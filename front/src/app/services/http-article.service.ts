import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Articles } from '../interfaces/article';
import { lastValueFrom } from 'rxjs';

const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private readonly http: HttpClient) {
    super();
    console.log('http article instantiated...');
  }

  override async refresh(): Promise<void> {
    this.articles = await lastValueFrom(this.http.get<Articles>(url));
  }
}
