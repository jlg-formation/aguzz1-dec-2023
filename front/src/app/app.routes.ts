import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { NotFoundComponent } from './widgets/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'legal',
    component: LegalComponent,
  },
  {
    path: 'stock',
    loadComponent: async () =>
      (await import('./stock/routes/list/list.component')).ListComponent,
  },
  {
    path: 'stock/add',
    loadComponent: async () =>
      (await import('./stock/routes/add/add.component')).AddComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
