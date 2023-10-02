import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponent2Component } from './left-component2.component';

describe('LeftComponent2Component', () => {
  let component: LeftComponent2Component;
  let fixture: ComponentFixture<LeftComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
