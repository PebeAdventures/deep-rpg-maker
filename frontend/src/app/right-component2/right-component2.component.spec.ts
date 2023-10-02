import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightComponent2Component } from './right-component2.component';

describe('RightComponent2Component', () => {
  let component: RightComponent2Component;
  let fixture: ComponentFixture<RightComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
