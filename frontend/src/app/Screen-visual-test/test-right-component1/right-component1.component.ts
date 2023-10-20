import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-component1',
  templateUrl: './right-component1.component.html',
  styleUrls: ['./right-component1.component.css']
})
export class RightComponent1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonLabels = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

}
