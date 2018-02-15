import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NgxBrPipesModule} from "./pipes/pipes.module";
import {CpfModule} from "./components/cpf/cpf.module";
import {CepModule} from "./components/cep/cep.module";

export * from './ngx-br.validators';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxBrPipesModule,
    CpfModule,
    CepModule
  ],
  declarations: [],
  exports: [
    NgxBrPipesModule,
    CpfModule,
    CepModule
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule,
      providers: []
    };
  }
}
