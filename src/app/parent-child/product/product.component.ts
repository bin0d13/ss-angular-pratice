import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public data = [
      {
        name: 'samsung tv',
        price: 25004,
        category: 'electronics',
        Photo: '../../../assets/Samsung tv.jpg',
      },
      {
        name: 'nike casual',
        price: 25004,
        category: 'footwear',
        Photo: '../../../assets/Nike shoes.jpg',
      },
      {
        name: 'mobile',
        price: 25004,
        category: 'electronics',
        Photo: '../../../assets/Mobile.jpg',
      },
      {
        name: 'sports ',
        price: 25004,
        category: 'footwear',
        Photo: '../../../assets/Nike shoes1.jpg',
      },
      {
        name: 'watches ',
        price: 5000,
        category: 'electronics',
        Photo: '../../../assets/Rolexwatch.jpg',
      },
    
  ];
  public allCount = this.data.length;
  public footwearCount = this.data.filter((x) => x.category == 'footwear').length;
  public categoryName = 'all';

  public categoryChanged(e) {
    this.categoryName = e;
  }

  public electronicsCount = this.data.filter((x) => x.category == 'electronics')
    .length;
  constructor() {}

  ngOnInit(): void {
  }
}
