import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  //@Input() name?: string;
  name: string = 'button testowy';
  button1Clicked() {
    // Handle button 1 click event
    // You can add your logic here
  }
}

