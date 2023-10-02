import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleComponentComponent } from './middle-component.component';

describe('MiddleComponentComponent', () => {
  let component: MiddleComponentComponent;
  let fixture: ComponentFixture<MiddleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
