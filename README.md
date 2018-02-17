# @nbfontana/ngx-br
[![Build Status](https://travis-ci.org/nbfontana/ngx-br.svg?branch=master)](https://travis-ci.org/nbfontana/ngx-br)
[![npm version](https://badge.fury.io/js/%40nbfontana%2Fngx-br.svg)](https://badge.fury.io/js/%40nbfontana%2Fngx-br)
[![codecov](https://codecov.io/gh/nbfontana/ngx-br/branch/master/graph/badge.svg)](https://codecov.io/gh/nbfontana/ngx-br)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nbfontana/ngx-br/master/LICENSE)

[![bitHound Overall Score](https://www.bithound.io/github/nbfontana/ngx-br/badges/score.svg)](https://www.bithound.io/github/nbfontana/ngx-br)
[![bitHound Code](https://www.bithound.io/github/nbfontana/ngx-br/badges/code.svg)](https://www.bithound.io/github/nbfontana/ngx-br)
[![bitHound Dependencies](https://www.bithound.io/github/nbfontana/ngx-br/badges/dependencies.svg)](https://www.bithound.io/github/nbfontana/ngx-br/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/nbfontana/ngx-br/badges/devDependencies.svg)](https://www.bithound.io/github/nbfontana/ngx-br/master/dependencies/npm)

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Licença](#licença)

## Sobre

**ngx-br** (< v0.3.1) agora é **@nbfontana/ngx-br**. Atualize!

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
O ngx-br é desenvolvido com a estrutura base do @angular/cli então segue o mesmo padrão.
Execute `ng serve`, `npm run dev` ou `npm star` para iniciar um servidor de desenvolvimento na porta 4200.

### Testando
Execute `npm run test` ou `ng test` para rodar todos os testes apenas uma vez ou `npm run test:watch` para rodar continuamente.

## Licença

MIT @ Neri Bez Fontana
