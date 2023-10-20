import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightComponent1Component } from './right-component1.component';

describe('RightComponent1Component', () => {
  let component: RightComponent1Component;
  let fixture: ComponentFixture<RightComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
