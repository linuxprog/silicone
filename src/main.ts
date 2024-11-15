/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@angular/localize/init';
import 'img-comparison-slider';
import { initAuthBackend } from './app/utils/authUtils';



// initFirebaseBackend(environment.firebaseConfig);

initAuthBackend();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err))
