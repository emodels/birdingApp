import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrantPage } from './migrant.page';

describe('MigrantPage', () => {
  let component: MigrantPage;
  let fixture: ComponentFixture<MigrantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
