import {Pipe, PipeTransform} from "@angular/core";
import {telefoneFixoPattern, telefoneCelularPattern} from "../components/constants";

const vanillaMasker = require('vanilla-masker');

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }
    let telefonePattern: string = value.toString().length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
    return vanillaMasker.toPattern(value, telefonePattern);
  }
}
