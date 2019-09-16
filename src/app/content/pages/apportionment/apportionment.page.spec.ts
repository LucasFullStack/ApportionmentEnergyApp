import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApportionmentPage } from './apportionment.page';

describe('ApportionmentPage', () => {
  let component: ApportionmentPage;
  let fixture: ComponentFixture<ApportionmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApportionmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApportionmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
