import {AbstractControl} from "@angular/forms";

export const EmailValidator = () => {
  return (control: AbstractControl) => {
    let emailValue: string = control.value;

    if (!emailValue) {
      return null;
    }

    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue) ? null : {email: true};
    /* tslint:enable */
  }
};
