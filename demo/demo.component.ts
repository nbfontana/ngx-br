import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgxBrValidators} from "../src/ngx-br-validators";

@Component({
  selector: 'br-demo-app',
  template: `
    <form class="container" [formGroup]="form">
      <div class="row">
        <div class="col-md-4 form-group">
          <cpf formControlName="cpf" [placeholder]="'000.000.000-00'"></cpf>
          <span *ngIf="form.get('cpf').hasError('cpf')" class="text-danger">CPF Inválido</span>
          <p>Valor do form: {{form.get('cpf').value}}</p>
          <p>CpfCnpjPipe: {{form.get('cpf').value | cpfOuCnpj}}</p>
          <p>CpfPipe: {{form.get('cpf').value | cpf}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <cnpj formControlName="cnpj" [placeholder]="'00.000.000/0000-00'"></cnpj>
          <span *ngIf="form.get('cnpj').hasError('cnpj')" class="text-danger">CNPJ Inválido</span>
          <p>Valor do form: {{form.get('cnpj').value}}</p>
          <p>CpfCnpjPipe: {{form.get('cnpj').value | cpfOuCnpj}}</p>
          <p>CnpjPipe: {{form.get('cnpj').value | cnpj}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <telefone formControlName="telefone" [placeholder]="'(48) 9 9999-9999'"></telefone>
          {{form.get('telefone').value}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <cep formControlName="cep"></cep>
          {{form.get('cep').value}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <estados [(ngModel)]="estado"
                   formControlName="estado"
                   [disabled]="true"
                   (ngModelChange)="change($event)"
                   [placeholder]="'Escolhe aí'">
          </estados>
          <br>
          <pre>{{ form.get('estado').value | json }}</pre>
          <pre>{{ estado }}</pre>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <hora [(ngModel)]="hora" formControlName="hora" (ngModelChange)="change($event)"></hora>
          <br>
          <span *ngIf="form.get('hora').hasError('hora')" class="text-danger">Hora inválida</span>
          <pre>{{ form.get('hora').value | json }}</pre>
          <pre>{{ hora }}</pre>
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
