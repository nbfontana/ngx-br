import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ValueAccessorBase} from "../value-acessor-base";
import {cnpjPattern, cnpjPlaceholder} from "../../constants";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

const CNPJ_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CnpjComponent),
  multi: true,
};

@Component({
  selector: 'cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css'],
  providers: [CNPJ_PROVIDER]
})
export class CnpjComponent extends ValueAccessorBase<string> {
  public pattern: string = cnpjPattern;

  @Input() placeholder: string = cnpjPlaceholder;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 14) : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
