import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {cepPattern} from "../constants";

@Component({
  selector: 'cep',
  template: `
    <input class="form-control" type="text" maxlength="9"
           id="{{id}}" placeholder="{{placeholder}}"
           disabled="{{disabled}}"
           [(ngModel)]="value" cepMask
           (ngModelChange)="notifyChanges($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CepComponent),
    multi: true
  }]
})
export class CepComponent extends ValueAccessorBase<string> {
  public pattern: string = cepPattern;

  @Input() id: string;
  @Input() placeholder: string;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 8) : value
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
