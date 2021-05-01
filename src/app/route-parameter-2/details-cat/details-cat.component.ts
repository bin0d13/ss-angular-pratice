import { Component, OnInit } from '@angular/core';
import { DisplayDataService } from '../display-data.service';

@Component({
  selector: 'app-details-cat',
  templateUrl: './details-cat.component.html',
  styleUrls: ['./details-cat.component.css']
})
export class DetailsCatComponent implements OnInit {

  constructor(private data: DisplayDataService) { }
  public categories = []

  ngOnInit(): void {
    this.categories = this.data.GettingData()
  }

}
