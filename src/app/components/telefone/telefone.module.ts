import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelefoneComponent} from './telefone.component';
import {TelefoneMaskDirective} from "./telefone.mask.directive";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TelefoneComponent,
    TelefoneMaskDirective
  ],
  exports: [
    TelefoneComponent,
    TelefoneMaskDirective
  ]
})
export class TelefoneModule {}
