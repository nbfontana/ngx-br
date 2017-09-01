import {Directive, ElementRef} from "@angular/core";
import {cpfPattern} from "../constants";

const vanillaMasker = require('vanilla-masker');
@Directive({
  selector: '[cpfMask]'
})
export class CpfMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cpfPattern);
  }
}
