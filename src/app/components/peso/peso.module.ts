import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PesoComponent} from './peso.component';
import {FormsModule} from "@angular/forms";
import {NgxCurrencyModule} from 'ngx-currency';

export * from './peso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxCurrencyModule
  ],
  declarations: [
    PesoComponent
  ],
  exports: [
    PesoComponent
  ]
})
export class PesoModule {}
