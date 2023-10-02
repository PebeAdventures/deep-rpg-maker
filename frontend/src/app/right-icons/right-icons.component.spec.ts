import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightIconsComponent } from './right-icons.component';

describe('RightIconsComponent', () => {
  let component: RightIconsComponent;
  let fixture: ComponentFixture<RightIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
