import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input() public allCount = 0;
  @Input() public electronicsCount = 0;
  @Input() public footwearCount = 0;
  public selectedRadiochange = 'all'
  @Output() public filterValueChange : EventEmitter<string> = new EventEmitter<string>();
  public radioButtonChage(){
    this.filterValueChange.emit(this.selectedRadiochange)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
function output() {
  throw new Error('Function not implemented.');
}

