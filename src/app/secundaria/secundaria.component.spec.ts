/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecundariaComponent } from './secundaria.component';

describe('SecundariaComponent', () => {
  let component: SecundariaComponent;
  let fixture: ComponentFixture<SecundariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecundariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
