import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CepComponent} from './cep.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

describe('CepComponent', () => {
  let component: CepComponent;
  let fixture: ComponentFixture<CepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepComponent ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
