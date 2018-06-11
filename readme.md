# @nbfontana/ngx-br

> I'm the brazilian module for angular

[![Build Status](https://travis-ci.org/nbfontana/ngx-br.svg?branch=master)](https://travis-ci.org/nbfontana/ngx-br)
[![npm version](https://badge.fury.io/js/%40nbfontana%2Fngx-br.svg)](https://badge.fury.io/js/%40nbfontana%2Fngx-br)
[![codecov](https://codecov.io/gh/nbfontana/ngx-br/branch/master/graph/badge.svg)](https://codecov.io/gh/nbfontana/ngx-br)

There're many repositories covering Brazilian needs for software development. NgxBr is here to concentrate almost everything that you need to build a functional pt-br software with Angular. We give you a full set of components (inputs, select, etc) covering fields like CEP, CPF, CNPJ, ESTADOS, etc. Beside that, we make available everything we use to build our components for the user, like Pipes and Directives (masks).

Feel free to use the entire NgxBrModule if it's your need, but you can always import components or pipes separatedly. Use it the way you want to.

## Contents

- Components
  - [Cep](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/cep)
  - [Cnpj](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/cnpj)
  - [Cpf](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/cpf)
  - [Dinheiro](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/dinheiro)
  - [Estados](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/estados)
  - [Hora](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/hora)
  - [Percentual](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/percentual)
  - [Peso](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/peso)
  - [Telefone](https://github.com/nbfontana/ngx-br/tree/master/src/app/components/telefone)
- Pipes
  - [Cpf](https://github.com/nbfontana/ngx-br/tree/master/src/app/pipes)
  - [Cnpj](https://github.com/nbfontana/ngx-br/tree/master/src/app/pipes)
  - [Cpf ou cnpj](https://github.com/nbfontana/ngx-br/tree/master/src/app/pipes)
  - [Telefone](https://github.com/nbfontana/ngx-br/tree/master/src/app/pipes)
  - [Cep](https://github.com/nbfontana/ngx-br/tree/master/src/app/pipes)
- Directives
  - [Cep]()
  - [Cnpj]()
  - [Cpf]()
  - [Dinheiro]()
  - [Hora]()
  - [Percentual]()
  - [Telefone]()
  
## Usage

Install as a dependency:
```
$ npm install --save @nbfontana/ngx-br
```

If you prefer using Yarn::
```
$ yarn add @nbfontana/ngx-br
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

## FAQ

### How do the inputs look like? `bootstrap`, `material`?

NgxBr is using **Bootstrap** classes for now, so, if you override the bootstrap style for **.form-control**, it'll be applied to all inputs as well. But we'll work to let it more flexible, all ideas are welcome! Open an Issue (you can write it in Portuguese).

### Help needed
Maybe you could help me define the way that components may be stylized?

Wich components should be added?

What kind of utilities may also be added and helpfull to be used within and outside ngx-br?


> MIT @ Neri Bez Fontana
