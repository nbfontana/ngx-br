import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {horaPattern} from "../constants";

const vanillaMasker = require('vanilla-masker');

@Component({
  selector: 'hora',
  template: `
    <input
      class="form-control text-right" horaMask id="{{id}}"
      type="text" maxlength="5"
      [placeholder]="placeholder"
      [(ngModel)]="value"
      (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HoraComponent),
    multi: true
  }]
})
export class HoraComponent extends ValueAccessorBase<string> {
  public pattern: string = horaPattern;

  @Input() placeholder: string = 'HH:MM';
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    let value = event.target.value;
    if (value) {
      value = value.replace(/[^\d]/g, '').padEnd(4, '0');
      this.value = vanillaMasker.toPattern(value, '99:99');
    }

    this.blur.emit(event);
  }

  transform(T): string {
    return undefined;
  }
}
