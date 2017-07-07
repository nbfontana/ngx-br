import {ModuleWithProviders, NgModule} from "@angular/core";
import {CpfComponent} from "./components/cpf.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IntegerDirective} from "./core/integer.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CpfComponent, IntegerDirective],
  exports: [CpfComponent]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule
    };
  }
}
