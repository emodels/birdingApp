import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdPage } from './bird.page';

describe('BirdPage', () => {
  let component: BirdPage;
  let fixture: ComponentFixture<BirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
