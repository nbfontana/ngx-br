import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgxBrValidators} from "../ngx-br.validators";

@Component({
  selector: 'demo-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public form: FormGroup;
  public model = new DemoModel();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    this.updateValues();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      cpf: [null, NgxBrValidators.cpf()],
      cnpj: [null, NgxBrValidators.cnpj()],
      cpfDisabled: [null],
      cnpjDisabled: [null],
      telefone: [null],
      cep: [null],
      percentual: [null, NgxBrValidators.percentualRequired()],
      estado: [null],
      dinheiro: [null, NgxBrValidators.dinheiroRequired()],
      hora: [null, NgxBrValidators.hora()],
    });
  }

  private updateValues() {
    this.form.get('cpfDisabled').setValue(12345678900);
    this.form.get('cpfDisabled').disable();
    this.form.get('cnpjDisabled').setValue(12345678900);
    this.form.get('cnpjDisabled').disable();

    setTimeout(() => {
      this.form.get('cpf').setValue('07987698903');
      this.model.estado = 'SC';
      this.model.hora = '22:22';
      this.model.cep = '88715000';
      this.model.telefone = 12345678910;
      this.model.cnpj = 83711511000149;
      this.model.dinheiro = 150.78;
      this.model.percentual = 15.9;
      this.model.peso = 30.69;
    },         1000);

    setTimeout(() => {
      this.model.dinheiro = 0;
      this.model.percentual = 0;
      this.model.peso = 0;
    },         4000);
  }
}

class DemoModel {
  cpf: number;
  cpfDisabled: number;
  cnpj: number;
  cnpjDisabled: number;
  estado: string;
  hora: string;
  cep: string;
  telefone: number;
  dinheiro: number;
  percentual: number;
  peso: number;
}
