import {Directive, ElementRef, HostListener} from '@angular/core';
import {removeNonDigitValues} from '../utils';
import {telefoneCelularPattern, telefoneFixoPattern} from "../../constants";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[telefoneMask]',
})
export class TelefoneMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    const telefonePattern: string = removeNonDigitValues(this.nativeElement.value).length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
    this.nativeElement.value = vanillaMasker.toPattern(this.nativeElement.value, telefonePattern);
  }
}
