import {Component, ElementRef, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {dinheiroPlaceholder} from "../constants";

@Component({
  selector: 'dinheiro',
  template: `
    <input class="form-control"
           maxlength="{{maxLength}}"
           currencyMask
           id="{{id}}" (keydown)="onKeydown($event)"
           disabled="{{disabled}}"
           [placeholder]="placeholder"
           [(ngModel)]="value"
           (ngModelChange)="notifyChanges($event)"
           (blur)="blurEvt($event)"
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
  @Input() maxLength: number = 15;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    super();
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }

  transform(value: string): string {
    return value;
  }

  onKeydown(event) {
    if (event.ctrlKey && event.keyCode === 65) {
      console.log(this.elementRef);
    }
  }
}
