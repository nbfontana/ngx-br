import {Directive, ElementRef} from "@angular/core";
import {cnpjPattern} from "../constants";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[cnpjMask]'
})
export class CnpjMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cnpjPattern);
  }
}
