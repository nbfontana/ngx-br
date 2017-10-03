import {ControlValueAccessor} from "@angular/forms";
import {Input} from "@angular/core";

const vanillaMasker = require('vanilla-masker');

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {

  @Input()
  public disabled: boolean = false;
  public onChange: any = () => {};
  public onTouched: any = () => {};

  abstract transform(T): T;
  abstract pattern: any;

  private innerValue: T;

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
      this.innerValue = this.applyPattern(value);
    }
  }

  private applyPattern(value: T) {
    if (!value) {
      return '';
    }

    if (typeof this.pattern === "string") {
      return vanillaMasker.toPattern(value, this.pattern);
    }

    if (typeof this.pattern === "function") {
      return vanillaMasker.toPattern(value, this.pattern(value));
    }

    return vanillaMasker.toMoney(value, this.pattern);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  };

  touch() {
    this.onTouched.forEach(f => f());
  }

  notifyChanges(value: T) {
    value = this.transform(value);
    this.onChange(value);
    this.onTouched();
  }
}
