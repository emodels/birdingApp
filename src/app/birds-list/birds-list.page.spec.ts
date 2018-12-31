import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsListPage } from './birds-list.page';

describe('BirdsListPage', () => {
  let component: BirdsListPage;
  let fixture: ComponentFixture<BirdsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
