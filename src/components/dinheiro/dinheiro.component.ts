import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {dinheiroPlaceholder} from "../constants";

@Component({
  selector: 'dinheiro',
  template: `
    <input class="form-control" 
           maxlength="20" 
           currencyMask
           id="{{id}}"
           disabled="{{disabled}}"
           [placeholder]="placeholder"
           [(ngModel)]="value"
           (ngModelChange)="notifyChanges($event)"
           (blur)="blurEvt()"
           [ngStyle]="style"
           [options]="{ prefix: 'R$ ', thousands: '.', decimal: ',', allowNegative: false }">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DinheiroComponent),
    multi: true
  }]
})
export class DinheiroComponent extends ValueAccessorBase<string> {
  pattern: string;

  @Input() style: any;
  @Input() placeholder: string = dinheiroPlaceholder;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    this.blur.emit(event);
  }

  transform(value: string): string {
    return value;
  }
}
