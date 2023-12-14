import { HttpClientModule } from '@angular/common/http';
import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ArticleService } from './services/article.service';
import { HttpArticleService } from './services/http-article.service';
import { environment } from '../environments/environment';

console.log('environment: ', environment);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    { provide: ArticleService, useClass: HttpArticleService },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
};
