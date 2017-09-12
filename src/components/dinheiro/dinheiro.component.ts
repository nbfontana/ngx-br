import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {dinheiroPatternConfig, dinheiroPlaceholder} from "../constants";
import {removeNonDigitValues} from "../utils";

const vanillaMasker = require('vanilla-masker');

@Component({
  selector: 'dinheiro',
  template: `
    <input class="form-control" type="text" maxlength="20" id="{{id}}"
           disabled="{{disabled}}" dinheiroMask
           [placeholder]="placeholder"
           [(ngModel)]="value"
           (ngModelChange)="notifyChanges($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DinheiroComponent),
    multi: true
  }]
})
export class DinheiroComponent extends ValueAccessorBase<string> {
  pattern: any = dinheiroPatternConfig;

  @Input() placeholder: string = dinheiroPlaceholder;
  @Input() oneDotOnly: boolean = true;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    let transformedValue = removeNonDigitValues(value);
    transformedValue = vanillaMasker.toMoney(transformedValue);
    transformedValue = removeNonDigitValues(transformedValue);

    if (this.oneDotOnly) {
      return this.formatToOnly2Dots(transformedValue);
    }

    return vanillaMasker.toMoney(transformedValue);
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }

  private formatToOnly2Dots(value: string): string {
    return value.slice(0, value.length - 2) + "." + value.slice(value.length - 2)
  }
}
