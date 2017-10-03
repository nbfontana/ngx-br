import {Directive, ElementRef, HostListener} from "@angular/core";
import {telefoneFixoPattern, telefoneCelularPattern} from "../constants";
import {removeNonDigitValues} from "../utils";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[telefoneMask]'
})
export class TelefoneMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    let telefonePattern: string = removeNonDigitValues(this.nativeElement.value).length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
    this.nativeElement.value = vanillaMasker.toPattern(this.nativeElement.value, telefonePattern);
  }
}
