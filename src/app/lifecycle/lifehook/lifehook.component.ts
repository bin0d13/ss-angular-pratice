import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifehook',
  templateUrl: './lifehook.component.html',
  styleUrls: ['./lifehook.component.css']
})
export class LifehookComponent implements OnInit {
   public msg = '';
   // first constructor is loaded
  constructor() {
    this.msg = 'constructor loaded --->';
   }
  // then ngoninit is loaded
  ngOnInit(): void {
    this.msg += 'after that ng oninit loaded';
  }

}
