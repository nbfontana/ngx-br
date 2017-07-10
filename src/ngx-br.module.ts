import {ModuleWithProviders, NgModule} from "@angular/core";
import {CpfComponent} from "./components/cpf.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CnpjComponent} from "./components/cnpj.component";

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
