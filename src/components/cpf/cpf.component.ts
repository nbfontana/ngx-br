import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";

@Component({
  selector: 'cpf',
  template: `
    <input type="text" class="form-control" maxlength="14" id="{{id}}"
           placeholder="{{placeholder}}"
           [ngModel]="value" cpfMask
           (ngModelChange)="notifyChange($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CpfComponent,
    multi: true
  }],
})
export class CpfComponent extends ValueAccessorBase<string> {

  @Input() placeholder: string;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  notifyChange(value: any) {
    value = value ? value.replace(/[^\d]/g, '').trim().slice(0, 11) : value;
    this.onChange(value);
    this.onTouched();
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }

}
