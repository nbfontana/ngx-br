import {Component} from '@angular/core';

@Component({
  selector: 'br-demo-app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ngx-cpf [placeholder]="'000.000.000-00'"></ngx-cpf>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <ngx-cnpj [placeholder]="'00.000.000/0000-00'"></ngx-cnpj>
        </div>
      </div>
    </div>
  `
})
export class DemoComponent {
}
