import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Articles, NewArticle } from '../interfaces/article';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

const url = environment.origin + '/api/articles';

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

  override async add(newArticle: NewArticle): Promise<void> {
    await lastValueFrom(this.http.post<void>(url, newArticle));
  }

  override async remove(ids: string[]): Promise<void> {
    await lastValueFrom(this.http.delete<void>(url, { body: ids }));
  }
}
