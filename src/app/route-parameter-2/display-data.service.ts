import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayDataService {

  constructor() { }
  public GettingData(){
    return [
      {CategoryId: 1, CategoryName:'electronic'},
      {CategoryId:2,CategoryName:'footwear'}
    ]
  }
  public GetProductDetails(){
    return [
      {ProductId:1, proName:'samsun TV', proPrice:14563, Photo: '../../assets/Samsung tv.jpg',description:'this is an samsung tv ', CategoryId:1},
      {ProductId:2, proName:'Mobile', proPrice:18563,Photo: '../../assets/Mobile.jpg',description:'this is an mobile', CategoryId:1},
      {ProductId:3, proName:'lee kooper', proPrice:9893,Photo: '../../assets/Nike shoes1.jpg',description:'this is an lee kopeer shoe', CategoryId:2},
      {ProductId:4, proName:'nike', proPrice:5469, Photo: '../../assets/Nike shoes.jpg',description:'this is an nike shoe ', CategoryId:2},
    ]
  }
}
