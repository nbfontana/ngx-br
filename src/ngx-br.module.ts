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

export {NgxBrValidators} from "./ngx-br-validators";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    // Components
    CpfComponent,
    CnpjComponent,
    TelefoneComponent,
    CepComponent,
    EstadosComponent,
    HoraComponent,

    //Pipes
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,

    //Directives
    CpfMaskDirective,
    CnpjMaskDirective,
    CepMaskDirective,
    TelefoneMaskDirective,
    HoraMaskDirective
  ],
  exports: [
    // Components
    CpfComponent,
    CnpjComponent,
    TelefoneComponent,
    CepComponent,
    EstadosComponent,
    HoraComponent,

    //Pipes
    CnpjPipe,
    CpfPipe,
    CpfCnpjPipe,

    //Directives
    CpfMaskDirective,
    CnpjMaskDirective,
    CepMaskDirective,
    TelefoneMaskDirective,
    HoraMaskDirective
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule
    };
  }
}
