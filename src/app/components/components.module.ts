import {NgModule} from '@angular/core';
import {CpfModule} from "./cpf/cpf.module";
import {CnpjModule} from "./cnpj/cnpj.module";
import {DinheiroModule} from "./dinheiro/dinheiro.module";
import {EstadosModule} from "./estados/estados.module";
import {HoraModule} from "./hora/hora.module";
import {PercentualModule} from "./percentual/percentual.module";
import {PesoModule} from "./peso/peso.module";
import {TelefoneModule} from "./telefone/telefone.module";
import {CepModule} from "./cep/cep.module";

export * from './cep/cep.module';
export * from './cnpj/cnpj.module';
export * from './cpf/cpf.module';
export * from './dinheiro/dinheiro.module';
export * from './estados/estados.module';
export * from './hora/hora.module';
export * from './percentual/percentual.module';
export * from './peso/peso.module';
export * from './telefone/telefone.module';

@NgModule({
  imports: [],
  declarations: [
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
export class NgxBrComponentsModule {}
