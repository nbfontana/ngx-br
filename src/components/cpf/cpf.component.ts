import {Component, EventEmitter, HostListener, Output, Input, ViewChild, ElementRef} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {KeyboardUtils} from "ngx-utilities";

let StringMask = require('string-mask');
let cpfPattern = new StringMask('000.000.000-00');

@Component({
  selector: 'cpf',
  template: `
    <input class="form-control" type="text" maxlength="14"
           placeholder="{{placeholder}}"
           (keydown)="onkeydown($event)"
           (ngModelChange)="parser($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CpfComponent,
    multi: true
  }],
})
export class CpfComponent extends ValueAccessorBase<string> {

  @Input() placeholder: string;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  private previousKeyDown;

  public parser(value: string) {
    this.value = CpfComponent.removeNotNumber(value);
  }

  public blurEvt(value: string): void {
    this.blur.next(value);
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

  @HostListener('keyup', ['$event']) onPaste(event: any) {
    event.target.value = CpfComponent.formatter(event.target.value);
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

    if (CpfComponent.isNotANumber(e)) {
      e.preventDefault();
    }
  }

  public static formatter(value: string) {
    return cpfPattern.apply(CpfComponent.removeNotNumber(value));
  }

  private static removeNotNumber(value: string) {
    return value ? value.replace(/[^\d]/g, '') : value;
  }

  private static isNotANumber(event: KeyboardEvent) {
    return (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
      (event.keyCode < 96 || event.keyCode > 105);
  }
}
