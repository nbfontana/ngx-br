import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {cpfPattern, cpfPlaceholder} from "../constants";

@Component({
  selector: 'cpf',
  template: `
    <input type="text" class="form-control" maxlength="14" id="{{id}}"
           placeholder="{{placeholder}}" 
           disabled="{{disabled}}"
           [(ngModel)]="value" cpfMask
           (ngModelChange)="notifyChanges($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CpfComponent,
    multi: true
  }],
})
export class CpfComponent extends ValueAccessorBase<string> {
  public pattern: string = cpfPattern;

  @Input() placeholder: string = cpfPlaceholder;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 11) : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
