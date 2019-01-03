import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsInSriLankaPage } from './birds-in-sri-lanka.page';

describe('BirdsInSriLankaPage', () => {
  let component: BirdsInSriLankaPage;
  let fixture: ComponentFixture<BirdsInSriLankaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsInSriLankaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsInSriLankaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
