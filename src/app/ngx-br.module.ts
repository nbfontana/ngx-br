import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxBrPipesModule} from "./pipes/pipes.module";
import {NgxBrComponentsModule} from "./components/components.module";
import {NgxBrValidators} from "./validators/validators";

export * from './pipes/pipes.module';
export * from './components/components.module';
export * from './validators/validators';
export * from './commons/value-acessor-base';

@NgModule({
  imports: [
    NgxBrComponentsModule,
    NgxBrPipesModule,
    NgxBrValidators
  ],
  exports: [
    NgxBrComponentsModule,
    NgxBrPipesModule,
    NgxBrValidators
  ]
})
export class NgxBrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrModule,
      providers: []
    };
  }
}
