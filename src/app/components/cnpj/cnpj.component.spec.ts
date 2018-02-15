import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpjComponent } from './cnpj.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

describe('CnpjComponent', () => {
  let component: CnpjComponent;
  let fixture: ComponentFixture<CnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnpjComponent ],
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
    fixture = TestBed.createComponent(CnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
