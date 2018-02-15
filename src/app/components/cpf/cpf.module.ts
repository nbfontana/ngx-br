import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpfComponent} from './cpf.component';
import {FormsModule} from "@angular/forms";
import {CpfMaskDirective} from "./cpf.mask.directive";
import {CpfComponentContainer} from "./cpf.component.container";

export * from './cpf.component';
export * from './cpf.component.container';
export * from './cpf.mask.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CpfComponent,
    CpfMaskDirective,
    CpfComponentContainer
  ],
  exports: [
    CpfComponent,
    CpfMaskDirective,
    CpfComponentContainer
  ]
})
export class CpfModule {}
