import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HiMooAppComponent, environment } from './app/';
import {HTTP_PROVIDERS} from '@angular/http';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

if (environment.production) {
  enableProdMode();
}

bootstrap(HiMooAppComponent, [HTTP_PROVIDERS]);
