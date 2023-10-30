import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestButtonsGroupComponent } from './test-buttons-group.component';

describe('RightComponent1Component', () => {
  let component: TestButtonsGroupComponent;
  let fixture: ComponentFixture<TestButtonsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestButtonsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
