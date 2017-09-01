import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {cnpjPattern} from "../constants";

@Component({
  selector: 'cnpj',
  template: `
    <input class="form-control" type="text" maxlength="18" id="{{id}}"
           placeholder="{{placeholder}}"
           [(ngModel)]="value" cnpjMask
           (ngModelChange)="notifyChanges($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CnpjComponent,
    multi: true
  }]
})
export class CnpjComponent extends ValueAccessorBase<string> {
  public pattern: string = cnpjPattern;

  @Input() placeholder: string;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 14) : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
