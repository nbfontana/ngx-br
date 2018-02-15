import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PercentualComponent} from './percentual.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgxCurrencyModule} from 'ngx-currency';

describe('PercentualComponent', () => {
  let component: PercentualComponent;
  let fixture: ComponentFixture<PercentualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentualComponent ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        NgxCurrencyModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
