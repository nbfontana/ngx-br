import { AbstractControl, ValidatorFn } from '@angular/forms';

export function percentualValidationFn(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    return value && value !== '0.0' ? null : { percentualRequired: true };
  };
}
