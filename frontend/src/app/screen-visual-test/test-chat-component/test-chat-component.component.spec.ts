import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChatComponentComponent } from './test-chat-component.component';

describe('MiddleComponentComponent', () => {
  let component: TestChatComponentComponent;
  let fixture: ComponentFixture<TestChatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestChatComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
