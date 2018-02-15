import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DinheiroComponent} from './dinheiro.component';
import {DinheiroMaskDirective} from "./dinheiro.mask.directive";
import {FormsModule} from "@angular/forms";
import {NgxCurrencyModule} from 'ngx-currency';

export * from './dinheiro.component';
export * from './dinheiro.mask.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxCurrencyModule
  ],
  declarations: [
    DinheiroComponent,
    DinheiroMaskDirective,
  ],
  exports: [
    DinheiroComponent,
    DinheiroMaskDirective
  ]
})
export class DinheiroModule {}
