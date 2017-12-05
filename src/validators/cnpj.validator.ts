import { AbstractControl, ValidatorFn } from '@angular/forms';

const CNPJ = require('cpf_cnpj').CNPJ;

export function cnpjValidationFn(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;

    if (value && !CNPJ.isValid(value)) {
      return {
        cnpj: true,
      };
    }

    return null;
  };
}
