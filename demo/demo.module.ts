import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxBrModule} from '../src';
import {DemoComponent} from './demo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxBrModule.forRoot(),
  ],
  bootstrap: [DemoComponent],
})
export class DemoModule {
}
