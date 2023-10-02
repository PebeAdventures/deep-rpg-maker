import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponent1Component } from './left-component1.component';

describe('LeftComponent1Component', () => {
  let component: LeftComponent1Component;
  let fixture: ComponentFixture<LeftComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
