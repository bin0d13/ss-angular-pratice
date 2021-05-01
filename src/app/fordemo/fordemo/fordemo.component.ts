import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {
  public listItem = ["mobie","shoes","tv"];

  // nested item access
  public products = [
    {category:"electronics", products:["mobile","freeze"]},
    {category:"footware",products:["sports shoe","running shoe"]},
    {category:"fashion",products:["t-shirts","track pant"]}
  ];

  // iteration property
  
  public items = [
    {id:1,name:"mobile",price:12563.20},
    {id:2,name:"tv",price:125004},
    {id:3,name:"frezze",price:15800},
    {id:4,name:"cooler",price:8000},
    {id:5,name:"grizer",price:6000},
  ];
  public additems(){
    this.items=[
    {id:1,name:"mobile",price:12563.20},
    {id:2,name:"tv",price:125004},
    {id:3,name:"frezze",price:15800},
    {id:4,name:"cooler",price:8000},
    {id:5,name:"grizer",price:6000},
    {id:6,name:"washing machine",price:30000},

  ];
}
   public oneadd(index,items){
     return this.items;
   }

  constructor() { }

  ngOnInit(): void {
  }

}
