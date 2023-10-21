import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNicknameComponent } from './test-nickname.component';

describe('LeftComponent1Component', () => {
  let component: TestNicknameComponent;
  let fixture: ComponentFixture<TestNicknameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNicknameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
