import {cnpjValidationFn} from "./validators/cnpj.validator";
import {cpfValidationFn} from "./validators/cpf.validator";
import {horaValidationFn} from "./validators/hora.validator";
import {ValidatorFn} from "@angular/forms";
import {dinheiroValidationFn} from "./validators/dinheiro.required.validator";

/**
 * Provides a set of Brazilian validators used by form controls.
 *
 * A validator is a function that processes a {@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ``` typescript
 * var cpfControl = new FormControl("", NgxBrValidators.cpf)
 * ```
 */
export class NgxBrValidators {

  /**
   * Validator that requires controls to match a valid CPF number.
   */
  static cpf: (blockEqualNumberSequence?: boolean) => ValidatorFn = cpfValidationFn;

  /**
   * Validator that requires controls to match a valid CNPJ number.
   */
  static cnpj: (blockEqualNumberSequence?: boolean) => ValidatorFn = cnpjValidationFn;

  /**
   * Validator that requires controls to match a valid HH:MM Hour
   */
  static hora: () => ValidatorFn = horaValidationFn;

  /**
   * Validator that requires controls to match a number bigger than zero
   */
  static dinheiroRequired: () => ValidatorFn = dinheiroValidationFn;

}
