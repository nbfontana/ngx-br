import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {NgxBrDemoModule} from "./ngx-br.module";

enableProdMode();

platformBrowserDynamic().bootstrapModule(NgxBrDemoModule);
