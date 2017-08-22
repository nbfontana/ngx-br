import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgxBrValidators} from "../src/ngx-br-validators";

@Component({
  selector: 'br-demo-app',
  template: `
    <form class="container" [formGroup]="form">
      <div class="row">
        <div class="col-md-4">
          <cpf formControlName="cpf" [placeholder]="'000.000.000-00'"></cpf>
          {{form.get('cpf').value}}
          <span *ngIf="form.get('cpf').hasError('cpf')" class="text-danger">CPF Inválido</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <cnpj formControlName="cnpj" [placeholder]="'00.000.000/0000-00'"></cnpj>
          <span *ngIf="form.get('cnpj').hasError('cnpj')" class="text-danger">CNPJ Inválido</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <telefone formControlName="telefone" [placeholder]="'(48) 9 9999-9999'"></telefone>
          {{form.get('telefone').value}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <cep formControlName="cep"></cep>
          {{form.get('cep').value}}
        </div>
      </div>
    </form>
  `
})
export class DemoComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      cpf: [null, NgxBrValidators.cpf()],
      cnpj: [null, NgxBrValidators.cnpj()],
      telefone: [''],
      cep: ['']
    });
  }

}
