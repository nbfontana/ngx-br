import {ControlValueAccessor} from "@angular/forms";

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {

  private innerValue: T;

  public onChange: any = () => {};
  public onTouched: any = () => {};

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: T) {
    this.innerValue = value;
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
}
