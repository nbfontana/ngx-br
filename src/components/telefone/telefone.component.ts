import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";
import {telefoneCelularPattern, telefoneFixoPattern} from "../constants";

@Component({
  selector: 'telefone',
  template: `
    <input class="form-control" type="text" maxlength="16" id="{{id}}"
           disabled="{{disabled}}"
           [placeholder]="placeholder"
           [(ngModel)]="value" telefoneMask
           (ngModelChange)="notifyChanges($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TelefoneComponent),
    multi: true
  }]
})
export class TelefoneComponent extends ValueAccessorBase<string> {
  public pattern = (value: any) : string => {
    return value.toString().length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
  };

  @Input() placeholder: string = telefoneFixoPattern;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 11) : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
