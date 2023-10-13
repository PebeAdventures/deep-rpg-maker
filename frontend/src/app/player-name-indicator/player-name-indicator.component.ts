import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-name-indicator',
  templateUrl: './player-name-indicator.component.html',
  styleUrls: ['./player-name-indicator.component.css']
})
export class PlayerNameIndicatorComponent {
  @Input() name: string = '';
  isPressed: boolean = false;

  togglePress() {
    this.isPressed = !this.isPressed;
  }
}
