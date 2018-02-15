import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CnpjComponent} from './cnpj.component';
import {CnpjMaskDirective} from "./cnpj.mask.directive";
import {FormsModule} from "@angular/forms";
import {CnpjComponentContainer} from "./cnpj.component.container";

export * from './cnpj.component';
export * from './cnpj.mask.directive';
export * from './cnpj.component.container';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CnpjComponent,
    CnpjMaskDirective,
    CnpjComponentContainer
  ],
  exports: [
    CnpjComponent,
    CnpjMaskDirective,
    CnpjComponentContainer
  ]
})
export class CnpjModule { }
