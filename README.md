# @nbfontana/ngx-br

> I'm the brazilian module for angular

[![Build Status](https://travis-ci.org/nbfontana/ngx-br.svg?branch=master)](https://travis-ci.org/nbfontana/ngx-br)
[![npm version](https://badge.fury.io/js/%40nbfontana%2Fngx-br.svg)](https://badge.fury.io/js/%40nbfontana%2Fngx-br)
[![codecov](https://codecov.io/gh/nbfontana/ngx-br/branch/master/graph/badge.svg)](https://codecov.io/gh/nbfontana/ngx-br)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nbfontana/ngx-br/master/LICENSE)

[![bitHound Overall Score](https://www.bithound.io/github/nbfontana/ngx-br/badges/score.svg)](https://www.bithound.io/github/nbfontana/ngx-br)
[![bitHound Code](https://www.bithound.io/github/nbfontana/ngx-br/badges/code.svg)](https://www.bithound.io/github/nbfontana/ngx-br)
[![bitHound Dependencies](https://www.bithound.io/github/nbfontana/ngx-br/badges/dependencies.svg)](https://www.bithound.io/github/nbfontana/ngx-br/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/nbfontana/ngx-br/badges/devDependencies.svg)](https://www.bithound.io/github/nbfontana/ngx-br/master/dependencies/npm)

## Contents

- [Components](#components)
  - [Cep]()
  - [Cnpj]()
  - [Cpf]()
  - [Dinheiro]()
  - [Estados]()
  - [Hora]()
  - [Percentual]()
  - [Peso]()
  - [Telefone]()
- [Pipes](#pipes)
  - [Cpf]()
  - [Cnpj]()
  - [Cpf ou cnpj]()
  - [Telefone]()

## Usage

Install as a dependency:
```
$ npm install --save @nbfontana/ngx-br
```

If you prefer using Yarn::
```
$ yarn add @nbfontana/ngx-br:
```

Then, you need to include NgxBrModule in your app:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxBrModule } from '@nbfontana/ngx-br';

@NgModule({
  imports: [
    NgxBrModule.forRoot()
  ]
})
export class MyModule {}
```

And use it:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<cpf formControlName="cpf" [(ngModel)]="model.cpf"></cpf>'
})
export class MyComponent {}
```

> MIT @ Neri Bez Fontana
