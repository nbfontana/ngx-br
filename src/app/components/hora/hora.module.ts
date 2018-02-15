import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoraComponent} from './hora.component';
import {HoraMaskDirective} from "./hora.mask.directive";
import {FormsModule} from "@angular/forms";

export * from './hora.component';
export * from './hora.mask.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HoraComponent,
    HoraMaskDirective
  ],
  exports: [
    HoraComponent,
    HoraMaskDirective
  ]
})
export class HoraModule {}
