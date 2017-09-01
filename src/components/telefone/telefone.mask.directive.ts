import {Directive, ElementRef} from "@angular/core";
import {telefonePattern} from "../constants";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[telefoneMask]'
})
export class TelefoneMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(telefonePattern);
  }
}
