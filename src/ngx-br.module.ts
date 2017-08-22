import {ModuleWithProviders, NgModule} from "@angular/core";
import {CpfComponent} from "./components/cpf/cpf.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CnpjComponent} from "./components/cnpj/cnpj.component";
import {CpfCnpjPipe} from "./pipes/cpf-cnpj.pipe";
import {TelefoneComponent} from "./components/telefone/telefone.component";
import {CepComponent} from "./components/cep/cep.component";
import {CpfMaskDirective} from "./components/cpf/cpf.mask.directive";

export {NgxBrValidators} from "./ngx-br-validators";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CpfComponent,
    CnpjComponent,
    CpfCnpjPipe,
    TelefoneComponent,
    CepComponent,
    CpfMaskDirective
  ],
  exports: [
    CpfComponent,
    CnpjComponent,
    CpfCnpjPipe,
    TelefoneComponent,
    CepComponent
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule
    };
  }
}
