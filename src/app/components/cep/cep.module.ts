import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CepComponent} from './cep.component';
import {CepMaskDirective} from "./cep.mask.directive";
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CepComponent,
    CepMaskDirective
  ],
  exports: [
    CepComponent,
    CepMaskDirective
  ]
})
export class CepModule { }
