import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CpfComponent} from './cpf.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

describe('CpfComponent', () => {
  let component: CpfComponent;
  let fixture: ComponentFixture<CpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfComponent ],
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
    fixture = TestBed.createComponent(CpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
