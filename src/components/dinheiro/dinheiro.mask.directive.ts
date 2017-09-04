import {Directive, ElementRef} from "@angular/core";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[dinheiroMask]'
})
export class DinheiroMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskMoney({
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$',
      zeroCents: false
    });
  }
}
