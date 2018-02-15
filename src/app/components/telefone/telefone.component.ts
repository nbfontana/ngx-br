import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../../commons/value-acessor-base";
import {telefoneCelularPattern, telefoneFixoPattern} from "../../commons/constants";

const TELEFONE_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TelefoneComponent),
  multi: true,
};

@Component({
  selector: 'telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css'],
  providers: [TELEFONE_PROVIDER]
})
export class TelefoneComponent extends ValueAccessorBase<string> {
  public pattern = (value: any) : string => {
    return value.toString().length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
  };

  @Input() placeholder: string = telefoneFixoPattern;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 11) : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
