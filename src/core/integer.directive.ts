import {Directive, ElementRef, HostListener, Input} from "@angular/core";

/* tslint:disable */
@Directive({
  selector: '[integer]'
})
export class IntegerDirective {

  constructor(private elementRef: ElementRef) {
  }

  @Input('special-characters') allowSpecialCharacters: boolean = false;

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    let e = <KeyboardEvent> event;

    if ([34, 37, 38, 43, 58, 61, 91, 93, 94, 96, 100, 123, 124, 125, 126, 168, 180, 199].indexOf(e.keyCode) !== -1) {
      e.preventDefault();
    }
  }

  @HostListener('keyup', ['$event']) onKeyUp(event) {
    let v = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = v.replace(/[^0-9]*/g, '');
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;

    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||

      // Allow Special Characters
      (this.allowSpecialCharacters && [110, 190].indexOf(e.keyCode) !== -1) ||

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

    // Ensure that it is a number and stop the keypress
    if (this.isNumber(e)) {
      e.preventDefault();
    }
  }

  private isNumber(event: KeyboardEvent) {
    return (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
      (event.keyCode < 96 || event.keyCode > 105);
  }

}
