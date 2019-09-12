import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDeatilPage } from './portfolio-deatil.page';

describe('PortfolioDeatilPage', () => {
  let component: PortfolioDeatilPage;
  let fixture: ComponentFixture<PortfolioDeatilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDeatilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDeatilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
