import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import AOS from 'aos';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

AOS.init();
