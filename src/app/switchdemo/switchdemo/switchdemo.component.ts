import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {
  public selectedList = 'feature';
  public changeView(obj) {
     this.selectedList = obj.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
