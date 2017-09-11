import {Directive, ElementRef} from "@angular/core";
import {percentualPatternConfig} from "../constants";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[percentualMask]'
})
export class PercentualMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskMoney(percentualPatternConfig);
  }
}
