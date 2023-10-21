import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSlideoutMenuComponent } from './test-slideout-menu.component';

describe('LeftComponent2Component', () => {
  let component: TestSlideoutMenuComponent;
  let fixture: ComponentFixture<TestSlideoutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSlideoutMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSlideoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
