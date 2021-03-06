import {Pipe, PipeTransform} from '@angular/core';
import {telefoneCelularPattern, telefoneFixoPattern} from "../commons/constants";

const vanillaMasker = require('vanilla-masker');

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }
    const telefonePattern: string = value.toString().length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
    return vanillaMasker.toPattern(value, telefonePattern);
  }
}
