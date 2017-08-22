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

    //Pipes
    CpfPipe,
    CnpjPipe,
    CpfCnpjPipe,

    //Directives
    CpfMaskDirective,
    CnpjMaskDirective,
    CepMaskDirective,
    TelefoneMaskDirective
  ],
  exports: [
    // Components
    CpfComponent,
    CnpjComponent,
    TelefoneComponent,
    CepComponent,

    //Pipes
    CnpjPipe,
    CpfPipe,
    CpfCnpjPipe
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule
    };
  }
}
