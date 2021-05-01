import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtercomp',
  templateUrl: './filtercomp.component.html',
  styleUrls: ['./filtercomp.component.css']
})
export class FiltercompComponent implements OnInit {
  public products=[
    {name:'samsungtv',price:25631,categories:'electronics'},
    {name:'tshirt',price:25631,categories:'fashion'},
    {name:'shoes',price:25631,categories:'footware'},
    {name:'samsungtv',price:25631,categories:'electronics'},
    {name:'sports shoe',price:25631,categories:'footware'},
    {name:'jeans',price:25631,categories:'fashion'}
  ]
  public selecteditems = 'all';

  constructor() { }

  ngOnInit(): void {
  }

}
