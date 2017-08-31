import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";

@Component({
  selector: 'cep',
  template: `
    <input class="form-control" type="text" maxlength="9" id="{{id}}"
           [ngModel]="value" cepMask
           (ngModelChange)="notifyChange($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CepComponent),
    multi: true
  }]
})
export class CepComponent extends ValueAccessorBase<string> {

  @Input() id: string;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  notifyChange(value: any) {
    value = value ? value.replace(/[^\d]/g, '').trim().slice(0, 8) : value;
    this.onChange(value);
    this.onTouched();
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
