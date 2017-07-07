import {ComponentFixture, TestBed} from "@angular/core/testing";
import {expect} from "chai";
import {NgxBrModule} from "../src";
import {CpfComponent} from "../src/components/cpf.component";

describe('***** Testes CPF *****', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxBrModule.forRoot()
      ]
    });
  });

  it('Should not accept non-numerical values', () => {
    const fixture: ComponentFixture<CpfComponent> = TestBed.createComponent(CpfComponent);
    let field: HTMLInputElement = fixture.nativeElement;
    field.value = 'A';
    expect(field.value).to.equals('');
  });

});
