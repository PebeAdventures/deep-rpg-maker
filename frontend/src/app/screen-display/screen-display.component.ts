import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen-display',
  templateUrl: './screen-display.component.html',
  styleUrls: ['./screen-display.component.css']
})
export class ScreenDisplayComponent {
  @Input() leftFlex: string = '25%';
  @Input() middleFlex: string = '50%';
  @Input() rightFlex: string = '25%';
}
