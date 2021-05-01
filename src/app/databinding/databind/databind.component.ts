import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  public product = {
    p_name:"mobile",
    p_price:12450,
    p_stock:true,
    p_photo:"../../../assets/1mg.jpg"
  }
  public usernam = 'john';
  public mergecount = 2;
  //one way bind
  public details = "mobile";
  //twoway binding
  public uname = "john"

  constructor() { }

  ngOnInit(): void {
  }

}
