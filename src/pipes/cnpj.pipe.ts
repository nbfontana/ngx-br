import {Pipe, PipeTransform} from "@angular/core";

const vanillaMasker = require('vanilla-masker');
const cnpjPattern = '99.999.999/9999-99';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    return vanillaMasker.toPattern(value, cnpjPattern);
  }
}
