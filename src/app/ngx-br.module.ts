import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NgxBrPipesModule} from "./pipes/pipes.module";
import {CpfModule} from "./components/cpf/cpf.module";
import {CepModule} from "./components/cep/cep.module";
import {CnpjModule} from "./components/cnpj/cnpj.module";
import {DinheiroModule} from "./components/dinheiro/dinheiro.module";
import {EstadosModule} from "./components/estados/estados.module";
import {HoraModule} from "./components/hora/hora.module";
import {PercentualModule} from "./components/percentual/percentual.module";
import {PesoModule} from "./components/peso/peso.module";
import {TelefoneModule} from "./components/telefone/telefone.module";
import {NgxCurrencyModule} from 'ngx-currency';

export * from './ngx-br.validators';

@NgModule({
  imports: [
    NgxCurrencyModule,
    CommonModule,
    FormsModule,
    NgxBrPipesModule,
    CpfModule,
    CepModule,
    CnpjModule,
    DinheiroModule,
    EstadosModule,
    HoraModule,
    PercentualModule,
    PesoModule,
    TelefoneModule,
  ],
  exports: [
    NgxCurrencyModule,
    NgxBrPipesModule,
    CpfModule,
    CepModule,
    CnpjModule,
    DinheiroModule,
    EstadosModule,
    HoraModule,
    PercentualModule,
    PesoModule,
    TelefoneModule,
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule,
      providers: []
    };
  }
}
