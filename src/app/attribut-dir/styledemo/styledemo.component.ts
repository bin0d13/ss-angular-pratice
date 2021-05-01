import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent implements OnInit {
  public styleobject = {
    'background-color':'darkcyan',
    'color':'white',
    'text-align':'center'
  }
  public bgcolor = '';
  public forecolor = '';
  public align = '';

  public applyHere(){
    this.styleobject = {
       'background-color': this.bgcolor,
       'color': this.forecolor,
       'text-align': this.align
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
