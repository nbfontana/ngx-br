import {Directive, ElementRef} from "@angular/core";
import {horaPattern} from "../constants";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[horaMask]'
})
export class HoraMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(horaPattern);
  }
}
