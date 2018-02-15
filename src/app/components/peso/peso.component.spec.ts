import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PesoComponent} from './peso.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgxCurrencyModule} from 'ngx-currency';

describe('PesoComponent', () => {
  let component: PesoComponent;
  let fixture: ComponentFixture<PesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoComponent ],
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
    fixture = TestBed.createComponent(PesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
