import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteratindex',
  templateUrl: './iteratindex.component.html',
  styleUrls: ['./iteratindex.component.css']
})
export class IteratindexComponent implements OnInit {
  public products = [
    {name:'samsung tv',photo:'../../assets/Samsung tv.jpg',Likes:0, Dislikes:0},
    {name:'watch',photo:'../../assets/Rolexwatch.jpg',Likes:0, Dislikes:0},
    {name:'nike shoe',photo:'../../assets/Nike shoes.jpg',Likes:0, Dislikes:0},
    {name:'mobile',photo:'../../assets/Mobile.jpg',Likes:0, Dislikes:0},
    // {name:'sun glasses',photo:'../../assets/Raybansunglasses.jpg',Likes:0, Dislikes:0},
  ]
  public likesCount(product){
    product.Likes++;

  }
  public dislikeCount(product){
    product.Dislikes++;

  }


  constructor() { }

  ngOnInit(): void {
  }

}
