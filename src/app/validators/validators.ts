import {ValidatorFn} from "@angular/forms";
import {cpfValidationFn} from "./cpf.validator";
import {cnpjValidationFn} from "./cnpj.validator";
import {dinheiroValidationFn} from "./dinheiro.required.validator";
import {percentualValidationFn} from "./percentual.required.validator";
import {horaValidationFn} from "./hora.validator";

export * from './cpf.validator';
export * from './cnpj.validator';
export * from './percentual.required.validator';
export * from './dinheiro.required.validator';
export * from './hora.validator';

export class NgxBrValidators {

  static cpf: (blockEqualNumberSequence?: boolean) => ValidatorFn = cpfValidationFn;

  static cnpj: (blockEqualNumberSequence?: boolean) => ValidatorFn = cnpjValidationFn;

  static hora: () => ValidatorFn = horaValidationFn;

  static dinheiroRequired: () => ValidatorFn = dinheiroValidationFn;

  static percentualRequired: () => ValidatorFn = percentualValidationFn;

}
