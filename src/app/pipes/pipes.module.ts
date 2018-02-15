import {NgModule} from '@angular/core';
import {CpfPipe} from "./cpf.pipe";
import {CnpjPipe} from "./cnpj.pipe";
import {CpfCnpjPipe} from "./cpf-ou-cnpj.pipe";
import {TelefonePipe} from "./telefone.pipe";

@NgModule({
  imports: [],
  declarations: [
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,
    TelefonePipe
  ],
  exports: [
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,
    TelefonePipe
  ]
})
export class NgxBrPipesModule {}
