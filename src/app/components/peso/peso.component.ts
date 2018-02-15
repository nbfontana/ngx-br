import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../../commons/value-acessor-base";
import {pesoPlaceholder} from "../../commons/constants";

const PESO_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PesoComponent),
  multi: true,
};

@Component({
  selector: 'peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css'],
  providers: [PESO_PROVIDER]
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
