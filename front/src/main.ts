import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { registerLocaleData } from '@angular/common';
import localeFrBE from '@angular/common/locales/fr-BE';

registerLocaleData(localeFrBE, 'fr-BE');

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
