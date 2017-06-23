import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgxBrDemoApp} from "./ngx-br.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [NgxBrDemoApp],
  bootstrap: [NgxBrDemoApp]
})
export class NgxBrDemoModule {
}
