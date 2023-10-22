import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMainpageComponent } from './player-mainpage.component';

describe('PlayerMainpageComponent', () => {
  let component: PlayerMainpageComponent;
  let fixture: ComponentFixture<PlayerMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
