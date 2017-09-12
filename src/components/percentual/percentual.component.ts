import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {percentualPatternConfig, percentualPlaceholder} from "../constants";
import {removeNonDigitValues} from "../utils";

const vanillaMasker = require('vanilla-masker');

@Component({
  selector: 'percentual',
  template: `
    <input class="form-control" type="text" maxlength="20" id="{{id}}" disabled="{{disabled}}"
           [placeholder]="placeholder" [(ngModel)]="value" percentualMask
           (ngModelChange)="notifyChanges($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PercentualComponent),
    multi: true
  }]
})
export class PercentualComponent extends ValueAccessorBase<string> {
  pattern: any = percentualPatternConfig;

  @Input() placeholder: string = percentualPlaceholder;
  @Input() oneDotOnly: boolean = false;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    let cleanValue = removeNonDigitValues(vanillaMasker.toMoney(value, percentualPatternConfig));
    let valueLenght = cleanValue.length;

    return cleanValue.slice(0, valueLenght - 1) + '.' + cleanValue.slice(valueLenght - 1, valueLenght);
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
