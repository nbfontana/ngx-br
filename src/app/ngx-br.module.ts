import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxBrPipesModule} from "./pipes/pipes.module";
import {NgxBrComponentsModule} from "./components/components.module";

export * from './pipes/pipes.module';
export * from './components/components.module';
export * from './validators/validators';
export * from './commons/value-acessor-base';

@NgModule({
  imports: [
    NgxBrComponentsModule,
    NgxBrPipesModule
  ],
  exports: [
    NgxBrComponentsModule,
    NgxBrPipesModule
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders<NgxBrModule> {
    return {
      ngModule: NgxBrModule,
      providers: []
    };
  }
}
