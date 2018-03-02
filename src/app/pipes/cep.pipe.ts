import {Pipe, PipeTransform} from '@angular/core';
import {cepPattern} from '../commons/constants';

const vanillaMasker = require('vanilla-masker');

@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    return vanillaMasker.toPattern(value, cepPattern);
  }
}
