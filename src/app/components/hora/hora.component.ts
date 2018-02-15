import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ValueAccessorBase} from "../value-acessor-base";
import {horaPattern, horaPlaceholder} from "../../constants";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

const vanillaMasker = require('vanilla-masker');

const HORA_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => HoraComponent),
  multi: true,
};

@Component({
  selector: 'hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css'],
  providers: [HORA_PROVIDER]
})
export class HoraComponent extends ValueAccessorBase<string> {
  public pattern: string = horaPattern;

  @Input() id: string;
  @Input() placeholder: string = horaPlaceholder;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    let value = event.target.value;
    if (value) {
      value = value.replace(/[^\d]/g, '').padEnd(4, '0');
      this.value = vanillaMasker.toPattern(value, '99:99');
    }

    this.blur.emit(event);
  }

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 5) : value;
  }
}
