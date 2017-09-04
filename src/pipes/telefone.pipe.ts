import {Pipe, PipeTransform} from "@angular/core";
import {telefonePattern} from "../components/constants";

const vanillaMasker = require('vanilla-masker');

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    return vanillaMasker.toPattern(value, telefonePattern);
  }
}
