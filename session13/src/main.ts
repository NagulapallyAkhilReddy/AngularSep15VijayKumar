import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { First } from './app/first/first';

bootstrapApplication(First, appConfig)
  .catch((err) => console.error(err));
