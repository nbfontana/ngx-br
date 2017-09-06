import {Directive, ElementRef} from "@angular/core";
import {dinheiroPatternConfig} from "../constants";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[dinheiroMask]'
})
export class DinheiroMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskMoney(dinheiroPatternConfig);
  }
}
