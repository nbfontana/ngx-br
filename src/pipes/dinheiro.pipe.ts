import {Pipe, PipeTransform} from "@angular/core";

const vanillaMasker = require('vanilla-masker');

@Pipe({
  name: 'dinheiro'
})
export class DinheiroPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    let splitted = value.toString().split('.');
    let precision = splitted[splitted.length - 1].length;

    return vanillaMasker.toMoney(value, {
      precision: precision,
      separator: ',',
      delimiter: '.',
      unit: 'R$',
      zeroCents: false
    });
  }
}
