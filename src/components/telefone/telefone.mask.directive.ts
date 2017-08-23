import {Directive, ElementRef} from "@angular/core";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[telefoneMask]'
})
export class TelefoneMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern('(99) 9 9999-9999');
  }
}
