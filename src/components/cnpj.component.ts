import {Component, EventEmitter, forwardRef, HostListener, Output, Input} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../core/value-acessor-base";

/* tslint:disable */
let StringMask = require('string-mask');
let cnpjPattern = new StringMask('00.000.000/0000-00');

@Component({
  selector: 'ngx-cnpj',
  template: `
    <input class="form-control" type="text" maxlength="18"
           placeholder="{{placeholder}}"
           (keydown)="onkeydown($event)"
           [ngModel]="formatter(value)"
           (ngModelChange)="parser($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CnpjComponent),
    multi: true
  }]
})
export class CnpjComponent extends ValueAccessorBase<string> {

  @Input() placeholder: string;
  @Output() blur: EventEmitter<any> = new EventEmitter();
  private previousKeyDown;

  public formatter(value) {
    return (cnpjPattern.apply(value) || '').trim().slice(0, 18);
  }

  public parser(v) {
    this.value = v ? v.replace(/[^\d]/g, '') : v;
  }

  public onkeydown(e): void {
    let previousKeyDownIsCtrlA = this.previousKeyDown && this.previousKeyDown.keyCode === 65 && this.previousKeyDown.ctrlKey;
    let endsWithSpecialCharacter = new RegExp('.+[^0-9]$').test(e.target.value);

    if (e.keyCode === 8 && endsWithSpecialCharacter && !previousKeyDownIsCtrlA) {
      this.parser(e.target.value.slice(0, e.target.value.length - 2));
      e.preventDefault();
    }

    this.previousKeyDown = e;
  }

  public blurEvt(value): void {
    this.blur.next(value);
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    console.log(this.value);
    console.log(event.srcElement.value);
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;

    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||

      // Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||

      // Allow: Ctrl+C
      (e.keyCode === 67 && e.ctrlKey === true) ||

      // Allow: Ctrl+V
      (event.keyCode === 86 && event.ctrlKey === true) ||

      // Allow: Ctrl+X
      (e.keyCode === 88 && e.ctrlKey === true) ||

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
}
