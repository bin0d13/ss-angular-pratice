import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterationfor',
  templateUrl: './iterationfor.component.html',
  styleUrls: ['./iterationfor.component.css']
})
export class IterationforComponent implements OnInit {

  public products =[
    {name:"mobile",price:15236,stock:true},
    {name:"tv",price:25000,stock:true},
    {name:"freeze",price:10000,stock:true}
  ]
  public txtName='';
  public txtPrice=0;
  public inStock=false;
  public newproduct = {
    name:"",
    price:0,
    stock:false
  }
  public addproduct(){
    this.newproduct = {
      name :this.txtName,
      price : this.txtPrice,
      stock:this.inStock
    };
     this.products.push(this.newproduct);
     alert("record inserted");
     this.txtName = '';
     this.txtPrice = 0;
     this.inStock = false;
  }
  public deletecount(index){
    // you can use this
    // alert("are you sure you want to delete")
    //   this.products.splice(index,1)
    // this is also you can
    let c = confirm("are you sure,want to delete");
    if(c == true){
      this.products.splice(index,1)
      alert("product delete successfully")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
