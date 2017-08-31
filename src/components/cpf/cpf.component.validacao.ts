import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'validacao-cpf',
  template: `
    <span *ngIf="shouldShowErrors()" style="color: #f05050">
      <span *ngIf="control.hasError('required')">{{requiredMsg}}</span>
      <span *ngIf="!control.hasError('required') && control.hasError('cpf')">{{cpfMsg}}</span>
    </span>
  `
})
export class ValidacaoCpfComponent {

  @Input() control: FormControl;
  @Input() requiredMsg: string = 'Este campo é obrigatório';
  @Input() cpfMsg: string = 'CPF Inválido';

  public shouldShowErrors(): boolean {
    return this.control && !this.control.valid && !this.control.pristine &&
      this.control.touched && !!this.control.errors;
  }

}
