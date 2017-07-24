import {AbstractControl, ValidatorFn} from "@angular/forms";

export function cnpjValidationFn(blockEqualNumberSequence?: boolean): ValidatorFn {
  return (control: AbstractControl) => {
    let value = control.value;
    blockEqualNumberSequence = blockEqualNumberSequence || true;

    if (!value) {
      return null;
    }

    value = value.replace(/[^\d]+/g, '');

    if (value.length !== 14) {
      return {
        cnpj: true
      };
    }

    let allNumbersAreEqual: boolean = value === '00000000000000' ||
      value === '11111111111111' || value === '22222222222222' || value === '33333333333333' ||
      value === '44444444444444' || value === '55555555555555' || value === '66666666666666' ||
      value === '77777777777777' || value === '88888888888888' || value === '99999999999999';

    if (allNumbersAreEqual && blockEqualNumberSequence) {
      return {
        cnpj: true
      };
    }

    let tamanho = value.length - 2;
    let numeros = value.substring(0, tamanho);
    let digitos = value.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== Number.parseInt(digitos.charAt(0))) {
      return {
        cnpj: true
      };
    }

    tamanho = tamanho + 1;
    numeros = value.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== Number.parseInt(digitos.charAt(1))) {
      return {
        cnpj: true
      };
    }

    return null;
  }
};
