import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {cepPattern, cepPlaceholder} from '../../constants';

const PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CepComponent),
  multi: true,
};

@Component({
  selector: 'cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
  providers: [PROVIDER]
})
export class CepComponent extends ValueAccessorBase<string> {
  public pattern: string = cepPattern;

  @Input() id: string;
  @Input() placeholder: string = cepPlaceholder;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 8) : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
