import {ModuleWithProviders, NgModule} from "@angular/core";
import {CpfComponent} from "./components/cpf/cpf.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CnpjComponent} from "./components/cnpj/cnpj.component";
import {CpfCnpjPipe} from "./pipes/cpf-cnpj.pipe";

export {NgxBrValidators} from "./ngx-br-validators";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CpfComponent,
    CnpjComponent,
    CpfCnpjPipe
  ],
  exports: [
    CpfComponent,
    CnpjComponent,
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
