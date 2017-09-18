import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {pesoPlaceholder} from "../constants";

@Component({
  selector: 'peso',
  template: `
    <input class="form-control"
           placeholder="{{placeholder}}"
           currencyMask
           maxlength="{{maxLength}}"
           id="{{id}}"
           (blur)="blurEvt($event)"
           [disabled]="disabled"
           [placeholder]="placeholder"
           [(ngModel)]="value"
           (ngModelChange)="notifyChanges($event)"
           [ngStyle]="style"
           [options]="{ suffix: ' kg', prefix: '', thousands: '.', decimal: ',', allowNegative: false }">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PesoComponent),
    multi: true
  }]
})
export class PesoComponent extends ValueAccessorBase<string> {
  pattern: string;

  @Input() style: any;
  @Input() maxLength: number = 10;
  @Input() placeholder: string = pesoPlaceholder;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    this.blur.emit(event);
  }

  transform(value: string): string {
    return value;
  }
}
