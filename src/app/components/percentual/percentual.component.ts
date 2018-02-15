import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ValueAccessorBase} from "../value-acessor-base";
import {percentualPlaceholder} from "../../constants";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

const PERCENTUAL_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PercentualComponent),
  multi: true,
};

@Component({
  selector: 'percentual',
  templateUrl: './percentual.component.html',
  styleUrls: ['./percentual.component.css'],
  providers: [PERCENTUAL_PROVIDER]
})
export class PercentualComponent extends ValueAccessorBase<string> {
  pattern: string;

  @Input() style: any;
  @Input() maxLength: number = 10;
  @Input() placeholder: string = percentualPlaceholder;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    this.blur.emit(event);
  }

  transform(value: string): string {
    return value;
  }
}
