import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {Component, forwardRef, Input} from "@angular/core";
import {Estado} from "./estado";
import {ValueAccessorBase} from "../value-acessor-base";

@Component({
  selector: 'estados',
  template: `
    <select class="form-control" [(ngModel)]="value" id="{{id}}">
      <option value="" disabled selected>{{placeholder}}</option>
      <option *ngFor="let estado of estados" [ngValue]="estado.sigla">{{estado.descricao}}</option>
    </select>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EstadosComponent),
    multi: true
  }]
})
export class EstadosComponent extends ValueAccessorBase<Estado> {

  @Input() placeholder: string = 'Selecione';
  @Input() id: string;

  public estados: Estado[] = [
    new Estado('AC', 'Acre'),
    new Estado('AL', 'Alagoas'),
    new Estado('AP', 'Amapá'),
    new Estado('AM', 'Amazonas'),
    new Estado('BA', 'Bahia'),
    new Estado('CE', 'Ceará'),
    new Estado('DF', 'Distrito Federal'),
    new Estado('ES', 'Espírito Santo'),
    new Estado('GO', 'Goiás'),
    new Estado('MA', 'Maranhão'),
    new Estado('MT', 'Mato Grosso'),
    new Estado('MS', 'Mato Grosso do Sul'),
    new Estado('MG', 'Minas Gerais'),
    new Estado('PA', 'Pará'),
    new Estado('PB', 'Paraíba'),
    new Estado('PR', 'Paraná'),
    new Estado('PE', 'Pernambuco'),
    new Estado('PI', 'Piauí'),
    new Estado('RJ', 'Rio de Janeiro'),
    new Estado('RN', 'Rio Grande do Norte'),
    new Estado('RS', 'Rio Grande do Sul'),
    new Estado('RO', 'Rondônia'),
    new Estado('RR', 'Roraima'),
    new Estado('SC', 'Santa Catarina'),
    new Estado('SP', 'São Paulo'),
    new Estado('SE', 'Sergipe'),
    new Estado('TO', 'Tocantins'),
  ];

}
