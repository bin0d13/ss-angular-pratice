import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-bind',
  templateUrl: './twoway-bind.component.html',
  styleUrls: ['./twoway-bind.component.css']
})
export class TwowayBindComponent implements OnInit {
  public name = "mobile";
  public price = 15004;
  public shipedTo = 'hyderbad';
  public isinstock = true

  constructor() { }

  ngOnInit(): void {
  }

}
