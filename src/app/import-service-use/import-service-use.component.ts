import { Component, OnInit } from '@angular/core';
import { DemoDataService } from './demo-data.service';

@Component({
  selector: 'app-import-service-use',
  templateUrl: './import-service-use.component.html',
  styleUrls: ['./import-service-use.component.css']
})
export class ImportServiceUseComponent implements OnInit {
  public data = [];
public allCount = this.data.length;
public footwearCount = this.data.filter((x) => x.category == 'footwear').length;
public categoryName = 'all';

public categoryChanged(e) {
  this.categoryName = e;
}

public electronicsCount = this.data.filter((x) => x.category == 'electronics')
  .length;

  constructor(private demos:DemoDataService) { }

  ngOnInit(): void {
    this.data = this.demos.deployee();
  }

}
