import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodeldemo',
  templateUrl: './ngmodeldemo.component.html',
  styleUrls: ['./ngmodeldemo.component.css']
})
export class NgmodeldemoComponent implements OnInit {
  public isBackground=false;
  public istext=false;
  public isBorder=false;
  public effects = [];

  constructor() { }

  ngOnInit(): void {
  }

}
