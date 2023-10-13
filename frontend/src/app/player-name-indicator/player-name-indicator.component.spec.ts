import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNameIndicatorComponent } from './player-name-indicator.component';

describe('PlayerNameIndicatorComponent', () => {
  let component: PlayerNameIndicatorComponent;
  let fixture: ComponentFixture<PlayerNameIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerNameIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNameIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
