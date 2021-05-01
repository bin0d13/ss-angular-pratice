import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-state-validation',
  templateUrl: './input-state-validation.component.html',
  styleUrls: ['./input-state-validation.component.css']
})
export class InputStateValidationComponent implements OnInit {
  public givenEven = false;
  public SelectCity = false;
  public SelectGen = false;
  public genSelect(val){
    if(val == 'none'){
      this.SelectGen = true;
    } else {
      this.SelectGen = false;
    }
  }
  public selectEven(val){
    if(val % 2 == 0){
      this.givenEven = false;
    } else{
      this.givenEven = true;
    }

  }
  public citySelect(val){
    if(val == 'nocity'){
      this.SelectCity = true;
    } else {
      this.SelectCity = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
