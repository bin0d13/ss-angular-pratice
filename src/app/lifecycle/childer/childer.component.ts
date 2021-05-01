import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childer',
  templateUrl: './childer.component.html',
  styleUrls: ['./childer.component.css']
})
export class ChilderComponent implements OnChanges {
  @Input() public userName = '';
     public currentValue= '';
     public previousValue='';

  ngOnChanges(changes : SimpleChanges){
  for(let property in changes){
    let change = changes[property];
    this.currentValue = change.currentValue;
    this.previousValue = change.previousValue;
  }
  }

  constructor() { }

  // ngOnInit(): void {
  // }

}
