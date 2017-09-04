import {AbstractControl, ValidatorFn} from "@angular/forms";

export function dinheiroValidationFn(): ValidatorFn {
  return (control: AbstractControl) => {
    let value = control.value;
    return value && value !== '0.00' && '0,00' ? null : {dinheiroRequired: true};
  }
}
