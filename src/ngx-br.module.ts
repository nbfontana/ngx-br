import {ModuleWithProviders, NgModule} from "@angular/core";
import {CpfComponent} from "./components/cpf/cpf.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CnpjComponent} from "./components/cnpj/cnpj.component";
import {CpfCnpjPipe} from "./pipes/cpf-ou-cnpj.pipe";
import {TelefoneComponent} from "./components/telefone/telefone.component";
import {CepComponent} from "./components/cep/cep.component";
import {CpfMaskDirective} from "./components/cpf/cpf.mask.directive";
import {CnpjMaskDirective} from "./components/cnpj/cnpj.mask.directive";
import {CepMaskDirective} from "./components/cep/cep.mask.directive";
import {TelefoneMaskDirective} from "./components/telefone/telefone.mask.directive";
import {CpfPipe} from "./pipes/cpf.pipe";
import {CnpjPipe} from "./pipes/cnpj.pipe";
import {EstadosComponent} from "./components/estados/estados.component";
import {HoraComponent} from "./components/hora/hora.component";
import {HoraMaskDirective} from "./components/hora/hora.mask.directive";
import {ValidacaoCpfComponent} from "./components/cpf/cpf.component.container";
import {ValidacaoCnpjComponent} from "./components/cnpj/cnpj.component.container";
import {TelefonePipe} from "./pipes/telefone.pipe";
import {DinheiroMaskDirective} from "./components/dinheiro/dinheiro.mask.directive";
import {DinheiroComponent} from "./components/dinheiro/dinheiro.component";
import {DinheiroPipe} from "./pipes/dinheiro.pipe";
import {PercentualComponent} from "./components/percentual/percentual.component";
import {PercentualMaskDirective} from "./components/percentual/percentual.mask.directive";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {PesoComponent} from "./components/peso/peso.component";

export {NgxBrValidators} from "./ngx-br-validators";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CurrencyMaskModule
  ],
  declarations: [
    // Components
    CpfComponent,
    ValidacaoCpfComponent,
    CnpjComponent,
    ValidacaoCnpjComponent,
    TelefoneComponent,
    CepComponent,
    EstadosComponent,
    HoraComponent,
    DinheiroComponent,
    PercentualComponent,
    PesoComponent,

    //Pipes
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,
    TelefonePipe,
    DinheiroPipe,

    //Directives
    CpfMaskDirective,
    CnpjMaskDirective,
    CepMaskDirective,
    TelefoneMaskDirective,
    HoraMaskDirective,
    DinheiroMaskDirective,
    PercentualMaskDirective
  ],
  exports: [
    // Components
    CpfComponent,
    ValidacaoCpfComponent,
    CnpjComponent,
    ValidacaoCnpjComponent,
    TelefoneComponent,
    CepComponent,
    EstadosComponent,
    HoraComponent,
    DinheiroComponent,
    PercentualComponent,
    PesoComponent,

    //Pipes
    CnpjPipe,
    CpfPipe,
    CpfCnpjPipe,
    TelefonePipe,
    DinheiroPipe,

    //Directives
    CpfMaskDirective,
    CnpjMaskDirective,
    CepMaskDirective,
    TelefoneMaskDirective,
    HoraMaskDirective,
    DinheiroMaskDirective,
    PercentualMaskDirective,

    //Modules
    CurrencyMaskModule
  ],
  providers: [
    CnpjPipe,
    CpfPipe,
    CpfCnpjPipe,
    TelefonePipe,
    DinheiroPipe
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule
    };
  }
}
