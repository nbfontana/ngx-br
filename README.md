# ngx br
[![Build Status](https://travis-ci.org/nbfontana/ngx-br.svg?branch=master)](https://travis-ci.org/nbfontana/ngx-br)
[![npm version](https://badge.fury.io/js/ngx-br.svg)](http://badge.fury.io/js/ngx-br)
[![devDependency Status](https://david-dm.org/nbfontana/ngx-br/dev-status.svg)](https://david-dm.org/nbfontana/ngx-br?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/nbfontana/ngx-br.svg)](https://github.com/nbfontana/ngx-br/issues)
[![GitHub stars](https://img.shields.io/github/stars/nbfontana/ngx-br.svg)](https://github.com/nbfontana/ngx-br/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nbfontana/ngx-br/master/LICENSE)

## Demo
https://nbfontana.github.io/ngx-br/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](https://nbfontana.github.io/ngx-br/docs/)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ngx-br
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxBrModule } from 'ngx-br';

@NgModule({
  imports: [
    NgxBrModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<cpf [placeholder]="'Digite seu CPF'"></cpf>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/nbfontana/ngx-br/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-br/bundles/ngx-br.umd.js"></script>
<script>
    // everything is exported ngxBr namespace
</script>
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` or `npm run demo` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

## License

MIT @ Neri Bez Fontana
