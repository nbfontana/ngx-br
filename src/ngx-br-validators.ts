import {cnpjValidationFn} from "./validators/cnpj.validator";
import {cpfValidationFn} from "./validators/cpf.validator";

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
  static cpf: (blockEqualNumberSequence?: boolean) => void = cpfValidationFn;

  /**
   * Validator that requires controls to match a valid CNPJ number.
   */
  static cnpj: (blockEqualNumberSequence?: boolean) => void = cnpjValidationFn;

}
