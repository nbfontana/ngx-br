import {Pipe, PipeTransform} from "@angular/core";

const vanillaMasker = require('vanilla-masker');
const cpfPattern = '999.999.999-99';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    return vanillaMasker.toPattern(value, cpfPattern);
  }
}
