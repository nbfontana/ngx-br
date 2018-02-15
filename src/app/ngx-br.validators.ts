import { cnpjValidationFn } from './validators/cnpj.validator';
import { cpfValidationFn } from './validators/cpf.validator';
import { horaValidationFn } from './validators/hora.validator';
import { ValidatorFn } from '@angular/forms';
import { dinheiroValidationFn } from './validators/dinheiro.required.validator';
import { percentualValidationFn } from './validators/percentual.required.validator';

export class NgxBrValidators {

  static cpf: (blockEqualNumberSequence?: boolean) => ValidatorFn = cpfValidationFn;

  static cnpj: (blockEqualNumberSequence?: boolean) => ValidatorFn = cnpjValidationFn;

  static hora: () => ValidatorFn = horaValidationFn;

  static dinheiroRequired: () => ValidatorFn = dinheiroValidationFn;

  static percentualRequired: () => ValidatorFn = percentualValidationFn;

}
