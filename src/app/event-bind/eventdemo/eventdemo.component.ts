import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {
  public butonName;
  public positionValue;
  public clicked(obj){
    this.butonName = obj.clientX;
    this.positionValue = obj.target.value;
  }
  public positionval;
  public positionX(obj1){
    this.positionval = obj1.clientX;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
