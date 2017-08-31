import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgxBrValidators} from "../src/ngx-br-validators";

@Component({
  selector: 'br-demo-app',
  template: `
    <form class="container" [formGroup]="form">

      <div class="row">
        <div class="col-md-7 form-group">

          <div class="row">
            <div class="col-md-4 form-group">
              <label>CPF</label>
              <cpf formControlName="cpf" [placeholder]="'000.000.000-00'"></cpf>
              <validacao-cpf [control]="form.get('cpf')"></validacao-cpf>
            </div>
            <div class="col-md-4 form-group">
              <label>CNPJ</label>
              <cnpj formControlName="cnpj" [placeholder]="'00.000.000/0000-00'"></cnpj>
              <validacao-cnpj [control]="form.get('cnpj')"></validacao-cnpj>
            </div>
            <div class="col-md-4 form-group">
              <label>Telefone</label>
              <telefone formControlName="telefone" [placeholder]="'(48) 9 9999-9999'"></telefone>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 form-group">
              <label>UF</label>
              <estados formControlName="estado"
                       [disabled]="true"
                       (ngModelChange)="change($event)"
                       [placeholder]="'Escolhe aí'">
              </estados>
            </div>
            <div class="col-md-4 form-group">
              <label>Cep</label>
              <cep formControlName="cep"></cep>
            </div>
            <div class="col-md-4 form-group">
              <label>Hora</label>
              <hora [(ngModel)]="hora" formControlName="hora" (ngModelChange)="change($event)"></hora>
            </div>
          </div>

        </div>
        <div class="col-md-5 form-group">
          <p>Formulário:</p>
          <pre>{{ form.value | json }}</pre>
        </div>
      </div>
    </form>
  `
})
export class DemoComponent {

  public estado: string;
  public hora: string;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      cpf: [null, NgxBrValidators.cpf()],
      cnpj: [null, NgxBrValidators.cnpj()],
      telefone: [''],
      cep: [''],
      estado: [''],
      hora: ['', NgxBrValidators.hora()]
    });
  }

  change(v) {
    console.log(v);
  }

}
