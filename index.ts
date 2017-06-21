import {NgModule} from "@angular/core";
import {CpfComponent} from "./src/cpf.component";

export * from "./src/cpf.component";

@NgModule({
  declarations: [CpfComponent],
  exports: [CpfComponent]
})
export class NgxBrazilianInputs {
}
