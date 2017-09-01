import {ControlValueAccessor} from "@angular/forms";

const vanillaMasker = require('vanilla-masker');

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {

  private innerValue: T;

  public onChange: any = () => {};
  public onTouched: any = () => {};

  abstract transform(T): T;

  abstract pattern: string;

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: T) {
    if (!this.pattern) {
      this.innerValue = value;
    } else {
      this.innerValue = value ? vanillaMasker.toPattern(value, this.pattern) : value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  touch() {
    this.onTouched.forEach(f => f());
  }

  notifyChanges(value: T) {
    value = this.transform(value);
    this.onChange(value);
    this.onTouched();
  }
}
