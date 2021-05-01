import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {
  public txtName = new FormControl();
  public lstCities = new FormControl();

  public updateData(){
    this.txtName.setValue('samsung tv');
    this.lstCities.setValue('Delhi');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
