import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";

@Component({
  selector: 'telefone',
  template: `
    <input class="form-control" type="text" maxlength="16"
           [placeholder]="placeholder"
           [ngModel]="value" telefoneMask
           (ngModelChange)="notifyChange($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TelefoneComponent),
    multi: true
  }]
})
export class TelefoneComponent extends ValueAccessorBase<string> {

  @Input() placeholder: string;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  notifyChange(value: any) {
    value = value ? value.replace(/[^\d]/g, '') : value;
    this.onChange(value);
  }

  public blurEvt(value: string): void {
    this.blur.next(value);
  }
}
