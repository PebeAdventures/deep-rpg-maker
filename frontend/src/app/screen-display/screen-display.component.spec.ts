import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDisplayComponent } from './screen-display.component';

describe('ScreenDisplayComponent', () => {
  let component: ScreenDisplayComponent;
  let fixture: ComponentFixture<ScreenDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
