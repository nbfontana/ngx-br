# @nbfontana/ngx-br
[![Build Status](https://travis-ci.org/nbfontana/ngx-br.svg?branch=master)](https://travis-ci.org/nbfontana/ngx-br)
[![npm version](https://badge.fury.io/js/%40nbfontana%2Fngx-br.svg)](https://badge.fury.io/js/%40nbfontana%2Fngx-br)
[![codecov](https://codecov.io/gh/nbfontana/ngx-br/branch/master/graph/badge.svg)](https://codecov.io/gh/nbfontana/ngx-br)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nbfontana/ngx-br/master/LICENSE)

## Versão anterior (AVISO)

**ngx-br** (< v0.3.1) agora é **@nbfontana/ngx-br**. Atualize!

## Demo
https://nbfontana.github.io/ngx-br/

## Índice

- [Sobre](#sobre)
- [Instalação](#instalacao)
- [Desenvolvimento](#desenvolvimento)
- [Licença](#licenca)

## Sobre



## Instalação

Instale as dependências com npm:
```
npm install --save @nbfontana/ngx-br
```

Depois inclua o NgxBrModule no módulo desejado do seu projeto:

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

Ao final é só utilizar o componente desejado em suas telas:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<cpf [placeholder]="'Digite seu CPF'"></cpf>'
})
export class MyComponent {}
```


## Desenvolvimento

### Prepare seu ambiente
* Instale o [Node.js](http://nodejs.org/) com o NPM
* Instale as dependencias locais de desenvolvimento: `npm install`

### Servidor de desenvolvimento
Execute `npm start` ou `npm run demo` para iniciar um servidor de desenvolvimento na porta 8000 com auto reloading e tests.

### Testando
Execute `npm test` para rodar todos os testes apenas uma vez ou `npm run test:watch` para rodar continuamente.

## Licença

MIT @ Neri Bez Fontana
