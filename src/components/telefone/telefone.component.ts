import {Component, forwardRef, Input, HostListener} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {KeyboardUtils} from "ngx-utilities";

let StringMask = require('string-mask');
let telefonePattern = new StringMask('(00) 0 0000-0000');

@Component({
  selector: 'telefone',
  template: `
    <input class="form-control" type="text" maxlength="16"
           [placeholder]="placeholder"
           [ngModel]="formatter(value)"
           (ngModelChange)="parser($event)"
           (keydown)="onkeydown($event)">
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TelefoneComponent),
      multi: true
    }
  ]
})
export class TelefoneComponent extends ValueAccessorBase<string> {

  private previousKeyDown;

  @Input() placeholder: string;

  public onkeydown(e): void {
    let previousKeyDownIsCtrlA = this.previousKeyDown && this.previousKeyDown.keyCode === 65 && this.previousKeyDown.ctrlKey;
    let endsWithSpecialCharacter = new RegExp('.+[^0-9]$').test(e.target.value);
    if (e.keyCode === 8 && endsWithSpecialCharacter && !previousKeyDownIsCtrlA) {
      this.parser(e.target.value.slice(0, e.target.value.length - 2));
      e.preventDefault();
    }
    this.previousKeyDown = e;
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent> event;

    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||

      KeyboardUtils.isCtrlAPressed(e) ||
      KeyboardUtils.isCtrlCPressed(e) ||
      KeyboardUtils.isCtrlVPressed(e) ||
      KeyboardUtils.isCtrlXPressed(e) ||

      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {

      // let it happen, don't do anything
      return;
    }

    if (this.isNotANumber(e)) {
      e.preventDefault();
    }
  }

  private isNotANumber(event: KeyboardEvent) {
    return (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
      (event.keyCode < 96 || event.keyCode > 105);
  }

  formatter(v) {
    return (telefonePattern.apply(v) || '').trim().slice(0, 14);
  }

  parser(v) {
    this.value = v ? v.replace(/[^\d]/g, '') : v;
  }

}
