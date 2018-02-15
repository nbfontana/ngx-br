import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EstadosComponent} from './estados.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EstadosComponent
  ],
  exports: [
    EstadosComponent
  ]
})
export class EstadosModule {}
