import {NgModule} from "@angular/core";
import {CpfComponent} from "./components/cpf.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CpfComponent],
  exports: [CpfComponent]
})
export class NgxBrazilianInputsModule {
}
