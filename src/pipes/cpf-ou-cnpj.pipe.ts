import {Pipe, PipeTransform} from "@angular/core";

const vanillaMasker = require('vanilla-masker');
const cpfPattern = '999.999.999-99';
const cnpjPattern = '99.999.999/9999-99';

const CPF_LENGTH = 11;

@Pipe({
  name: 'cpfOuCnpj'
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    if (value.length > CPF_LENGTH) {
      return vanillaMasker.toPattern(value, cnpjPattern);
    }

    return vanillaMasker.toPattern(value, cpfPattern);
  }
}
