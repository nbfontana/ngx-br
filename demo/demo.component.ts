import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
              <cpf-container [control]="form.get('cpf')">
                <cpf [(ngModel)]="model.cpf" formControlName="cpf" [placeholder]="'000.000.000-00'"
                     (blur)="change($event)"></cpf>
              </cpf-container>
            </div>
            <div class="col-md-4 form-group">
              <label>CNPJ</label>
              <cnpj-container [control]="form.get('cnpj')">
                <cnpj [(ngModel)]="model.cnpj" formControlName="cnpj" [placeholder]="'00.000.000/0000-00'"></cnpj>
              </cnpj-container>
            </div>
            <div class="col-md-4 form-group">
              <label>Telefone</label>
              <telefone [(ngModel)]="model.telefone" formControlName="telefone"
                        [placeholder]="'(48) 9 9999-9999'"></telefone>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 form-group">
              <label>UF</label>
              <estados [(ngModel)]="model.estado" [ngModelOptions]="{standalone: true}"
                       (ngModelChange)="change($event)"
                       [placeholder]="'Escolhe aí'">
              </estados>
            </div>
            <div class="col-md-4 form-group">
              <label>Cep</label>
              <cep [(ngModel)]="model.cep" formControlName="cep"></cep>
            </div>
            <div class="col-md-4 form-group">
              <label>Hora</label>
              <hora [disabled]="true" [(ngModel)]="model.hora" formControlName="hora"
                    (ngModelChange)="change($event)"></hora>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-4">
              <dinheiro [(ngModel)]="model.dinheiro" formControlName="dinheiro"></dinheiro>
              <span *ngIf="form.get('dinheiro').hasError('dinheiroRequired')">Required</span>
            </div>
            <div class="col-md-2">
              {{10.6 | dinheiro}}
              {{10.5 | dinheiro}}
              {{1.23 | dinheiro}}
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-3">
              <percentual [(ngModel)]="model.percentual" formControlName="percentual"></percentual>
            </div>
            <div class="col-md-3">
              {{form.get('percentual').hasError('percentualRequired')}}
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

  public form: FormGroup;
  public model = new Teste();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      cpf: [null, NgxBrValidators.cpf()],
      cnpj: [null, NgxBrValidators.cnpj()],
      telefone: [null],
      cep: [null],
      percentual: [null, NgxBrValidators.percentualRequired()],
      estado: [null],
      dinheiro: [null, NgxBrValidators.dinheiroRequired()],
      hora: [null, NgxBrValidators.hora()]
    });
    setTimeout(() => {
      this.form.get('cpf').setValue("08754248990");
      this.model.estado = "SC";
      this.model.hora = "22:22";
      this.model.cep = "88715000";
      this.model.telefone = "48999999999";
      this.model.cnpj = "98798798";
      this.model.dinheiro = 150.78;
      this.model.percentual = 15.9;
    }, 1000)
  }

  public change(value: any) {
    console.log(value);
  }
}

class Teste {
  estado: string;
  hora: string;
  cep: string;
  telefone: string;
  cnpj: string;
  cpf: string;
  dinheiro: number;
  percentual: number;
}
