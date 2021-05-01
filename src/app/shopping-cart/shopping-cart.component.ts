import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public selectCategory = 'select a category';
  public selectProduct = 'select a product';
  public categories = ['select a category','Fashion','Electronics','Footwear'];
  
  public fashion = ['select a fashion','jeans','sun glasses'];
  public electronics = ['select a electronics','samsung tv','mobile'];
  public footwear = ['select a footwear','shoes','nike shoe'];
  public products = [];
  public serchResult = [];
  public prodPhoto = '';
  public showDetails = false;
  public prodName = '';
  public prodPrice = 0;
  public prodMfd = new Date();

  public data = [
    // electronics
    {Name: 'samsung tv',Price:45220,Mfd:new Date ('2020/10/2'),Photo:"../../assets/Samsung tv.jpg"},
    {Name: 'mobile',Price:25009,Mfd:new Date ('2020/10/2'),Photo:"../../assets/Mobile.jpg"},
    // fashion
    {Name: 'jeans',Price:3220,Mfd:new Date ('2020/10/2'),Photo:"../../assets/Levisjeans.jpg"},
    {Name: 'sun glasses',Price:45220,Mfd:new Date ('2020/10/2'),Photo:"../../assets/Raybansunglasses.jpg"},
    //footwear
    {Name: 'shoes',Price:45220,Mfd:new Date ('2020/10/2'),Photo:"../../assets/Nike shoes.jpg"},
    {Name: 'nike shoe',Price:45220,Mfd:new Date ('2020/10/2'),Photo:"../../assets/Nike shoes1.jpg"}
  ]
  public selectedProductchange(){
    this.showDetails = true
    this.serchResult = this.data.filter(x=>x.Name== this.selectProduct);
    this.prodName = this.serchResult[0].Name;
    this.prodPrice = this.serchResult[0].Price;
    this.prodMfd = this.serchResult[0].Mfd;
    this.prodPhoto = this.serchResult[0].Photo;

  }
  public categoryChange(){
    switch(this.selectCategory){
      case 'Fashion':
        this.products = this.fashion;
        break;
        case 'Electronics':
          this.products = this.electronics;
          break;
          case 'Footwear':
            this.products = this.footwear;
            break;
            default :
            this.products = ['please select a category']
            break;
    }
  }
  // adding cart
  public cartItem = {
    Name:'',
    Price: 0,
    Mfd : new Date(),
    photo : ''
  }; 
  public showCart = false;
  public cartItemCount = 0;
  public shoppingcart = [];
  public addtocart(){
    this.shoppingcart.push({Name: this.prodName, Price : this.prodPrice, Mfd : this.prodMfd, Photo: this.prodPhoto});
    alert('item add to cart');
    this.cartItemCount = this.shoppingcart.length

  }
  public displaycart(){
    this.showCart = true;
  }
  public closeCart(){
    this.showCart = false
  }
  public cartitemDelete(index){
   let x = confirm("are you sure want to delete?")
   if(x == true){
     this.shoppingcart.splice(index,1)
   }
   this.cartItemCount = this.shoppingcart.length;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
