import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CnpjComponent} from './cnpj.component';
import {CnpjMaskDirective} from "./cnpj.mask.directive";
import {FormsModule} from "@angular/forms";
import {ValidacaoCnpjComponent} from "./cnpj.component.container";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CnpjComponent,
    CnpjMaskDirective,
    ValidacaoCnpjComponent
  ],
  exports: [
    CnpjComponent,
    CnpjMaskDirective,
    ValidacaoCnpjComponent
  ]
})
export class CnpjModule { }
