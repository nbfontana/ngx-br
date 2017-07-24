import {AbstractControl} from "@angular/forms";

export const CpfValidator = (allowAllEqualNumbers: boolean) => {
  return (control: AbstractControl) => {
    let value = control.value;

    if (!value) {
      return null;
    }

    let allNumbersAreEqual: boolean = value === '00000000000000' ||
      value === '11111111111111' || value === '22222222222222' || value === '33333333333333' ||
      value === '44444444444444' || value === '55555555555555' || value === '66666666666666' ||
      value === '77777777777777' || value === '88888888888888' || value === '99999999999999';

    if (allNumbersAreEqual && allowAllEqualNumbers) {
      return {
        cpf: true
      };
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(value.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== parseInt(value.substring(9, 10))) {
      return {
        cpf: true
      };
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma += parseInt(value.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== parseInt(value.substring(10, 11))) {
      return {
        cpf: true
      };
    }

    return null;
  }
};
