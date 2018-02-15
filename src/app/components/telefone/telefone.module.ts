import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelefoneComponent} from './telefone.component';
import {TelefoneMaskDirective} from "./telefone.mask.directive";
import {FormsModule} from "@angular/forms";

export * from './telefone.component';
export * from './telefone.mask.directive';

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
