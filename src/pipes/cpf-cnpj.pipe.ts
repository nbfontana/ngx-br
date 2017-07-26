import {Pipe, PipeTransform} from "@angular/core";

const StringMask = require('string-mask');
const cpfPattern = new StringMask('000.000.000-00');
const cnpjPattern = new StringMask('00.000.000/0000-00');

const CPF_LENGTH = 11;

@Pipe({
  name: 'cpfCnpj'
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    if (value.length > CPF_LENGTH) {
      return cnpjPattern.apply(value)
    }

    return cpfPattern.apply(value);
  }
}
