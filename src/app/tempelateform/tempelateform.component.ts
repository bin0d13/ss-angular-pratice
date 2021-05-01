import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempelateform',
  templateUrl: './tempelateform.component.html',
  styleUrls: ['./tempelateform.component.css']
})
export class TempelateformComponent implements OnInit {
  public product;
  public OnSubmit(obj){
    this.product = obj;
    alert(this.product.txtName)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
