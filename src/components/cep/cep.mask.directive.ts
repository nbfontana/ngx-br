import {Directive, ElementRef} from "@angular/core";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[cepMask]'
})
export class CepMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern('99999-999');
  }
}
