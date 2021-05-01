import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {
  public deployee (){
    return [{
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
  ]
  }

  constructor() { }
}
