import {AbstractControl, ValidatorFn} from "@angular/forms";

const CPF = require("cpf_cnpj").CPF;

export function cpfValidationFn(): ValidatorFn {
  return (control: AbstractControl) => {
    let value = control.value;

    if (!CPF.isValid(value)) {
      return {
        cpf: true
      };
    }

    return null;
  }
}
