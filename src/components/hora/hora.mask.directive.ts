import {Directive, ElementRef} from "@angular/core";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[horaMask]'
})
export class HoraMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern('99:99');
  }
}
