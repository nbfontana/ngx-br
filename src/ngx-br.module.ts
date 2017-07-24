import {ModuleWithProviders, NgModule} from "@angular/core";
import {CpfComponent} from "./components/cpf/cpf.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CnpjComponent} from "./components/cnpj/cnpj.component";

export * from "./validators/cnpj.validator";
export * from "./validators/cpf.validator";
export * from "./validators/email.validator";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CpfComponent,
    CnpjComponent
  ],
  exports: [
    CpfComponent,
    CnpjComponent
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule
    };
  }
}
