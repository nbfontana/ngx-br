import {Directive, ElementRef} from "@angular/core";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[cnpjMask]'
})
export class CnpjMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern('99.999.999/9999-99');
  }
}
