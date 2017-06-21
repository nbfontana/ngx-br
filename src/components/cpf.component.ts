import {Component, EventEmitter, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../core/value-acessor-base";

/* tslint:disable */

let StringMask = require('string-mask');
let cpfPattern = new StringMask('000.000.000-00');

@Component({
  selector: 'cpf',
  template: `
    <label>CPF</label>
    <input class="form-control" type="text" maxlength="14"
           [ngModel]="formatter(value)"
           (ngModelChange)="parser($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CpfComponent,
    multi: true,
  }],
})
export class CpfComponent extends ValueAccessorBase<string> {

  @Output() blur: EventEmitter<any> = new EventEmitter();

  public formatter(value: string) {
    return (cpfPattern.apply(value) || '').trim().slice(0, 14);
  }

  public parser(value: string) {
    this.value = value ? value.replace(/[^\d]/g, '') : value;
  }

  public blurEvt(value: string): void {
    this.blur.next(value);
  }
}
