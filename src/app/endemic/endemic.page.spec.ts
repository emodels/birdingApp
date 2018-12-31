import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndemicPage } from './endemic.page';

describe('EndemicPage', () => {
  let component: EndemicPage;
  let fixture: ComponentFixture<EndemicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndemicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndemicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
