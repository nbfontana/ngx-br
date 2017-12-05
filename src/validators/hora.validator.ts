import { AbstractControl, ValidatorFn } from '@angular/forms';

export function horaValidationFn(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const isValid = new RegExp('^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$').test(value);

    if (!isValid) {
      return {
        hora: true,
      };
    }

    return null;
  };
}
