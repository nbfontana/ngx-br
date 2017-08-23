import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {expect} from "chai";
import {NgxBrModule} from "../src";
import {CpfComponent} from "../src/components/cpf/cpf.component";
import {By} from "@angular/platform-browser";

describe('***** Testes CPF *****', () => {

  let cpfComponent: CpfComponent;
  let cpfFixture: ComponentFixture<CpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxBrModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    cpfFixture = TestBed.createComponent(CpfComponent);
    cpfComponent = cpfFixture.componentInstance;
    cpfFixture.detectChanges();
  });

  it('Should not accept non-numerical values', fakeAsync(() => {
    let field: HTMLInputElement = cpfFixture.nativeElement;
    setInputValue(field, '1234');
    expect(field.value).to.equals('123.4');
    // cpfComponent.writeValue('1234');
    // cpfFixture.detectChanges();
    // expect(cpfComponent.value).to.equals('123.4');
  }));

  function setInputValue(field: any, value: string) {
    cpfFixture.detectChanges();
    tick();
    field.value = value;
    field.dispatchEvent(new Event('input'));
    tick();
  }

});
