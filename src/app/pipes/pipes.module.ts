import {NgModule} from '@angular/core';
import {CpfPipe} from "./cpf.pipe";
import {CnpjPipe} from "./cnpj.pipe";
import {CpfCnpjPipe} from "./cpf-ou-cnpj.pipe";
import {TelefonePipe} from "./telefone.pipe";
import {CepPipe} from './cep.pipe';

export * from './cnpj.pipe';
export * from './cpf-ou-cnpj.pipe';
export * from './cpf.pipe';
export * from './telefone.pipe';

@NgModule({
  imports: [],
  declarations: [
    CepPipe,
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,
    TelefonePipe
  ],
  exports: [
    CepPipe,
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,
    TelefonePipe
  ],
  providers: [
    CepPipe,
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,
    TelefonePipe
  ]
})
export class NgxBrPipesModule {}
