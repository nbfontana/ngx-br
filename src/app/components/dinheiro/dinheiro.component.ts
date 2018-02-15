import {Component, ElementRef, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ValueAccessorBase} from "../value-acessor-base";
import {dinheiroPlaceholder} from "../../constants";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

const DINHEIRO_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DinheiroComponent),
  multi: true,
};

@Component({
  selector: 'dinheiro',
  templateUrl: './dinheiro.component.html',
  styleUrls: ['./dinheiro.component.css'],
  providers: [DINHEIRO_PROVIDER]
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
