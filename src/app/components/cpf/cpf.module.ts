import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpfComponent} from './cpf.component';
import {FormsModule} from "@angular/forms";
import {CpfMaskDirective} from "./cpf.mask.directive";
import {ValidacaoCpfComponent} from "./cpf.component.container";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CpfComponent,
    CpfMaskDirective,
    ValidacaoCpfComponent
  ],
  exports: [
    CpfComponent,
    CpfMaskDirective,
    ValidacaoCpfComponent
  ]
})
export class CpfModule {}
