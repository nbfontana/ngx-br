import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxBrModule} from "../ngx-br.module";
import {DemoComponent} from "./demo.component";

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxBrModule.forRoot()
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
