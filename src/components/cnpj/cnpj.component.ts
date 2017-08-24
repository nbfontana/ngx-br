import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";

@Component({
  selector: 'cnpj',
  template: `
    <input class="form-control" type="text" maxlength="18"
           placeholder="{{placeholder}}"
           [ngModel]="value" cnpjMask
           (ngModelChange)="notifyChange($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CnpjComponent,
    multi: true
  }]
})
export class CnpjComponent extends ValueAccessorBase<string> {

  @Input() placeholder: string;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  notifyChange(value: any) {
    value = value ? value.replace(/[^\d]/g, '').trim().slice(0, 14) : value;
    this.onChange(value);
    this.onTouched();
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }

}
