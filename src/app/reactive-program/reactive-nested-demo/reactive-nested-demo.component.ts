import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-nested-demo',
  templateUrl: './reactive-nested-demo.component.html',
  styleUrls: ['./reactive-nested-demo.component.css']
})
export class ReactiveNestedDemoComponent implements OnInit {
  public frmRegister = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
     frmDetails : new FormGroup({
       city: new FormControl(),
       stock: new FormControl()
     })
  })
  public updateParttial(){
    this.frmRegister.patchValue({
      name: 'samsung tv',
      frmDetails: {
        city : 'Delhi',
        stock: true
      }
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
