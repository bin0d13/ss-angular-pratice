import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlast',
  templateUrl: './eventlast.component.html',
  styleUrls: ['./eventlast.component.css']
})
export class EventlastComponent implements OnInit {
  public showmsg = false;
  public showing(){
    this.showmsg = true
  }
  public userName = '';
  public onBlur(){
    this.showmsg = false;
    this.userName = this.userName.toUpperCase();
  }
  public message = 'Please Enter Name in Block Letters';
  public onCopy(){
    this.message= 'characters are copid';
  }
  public onCut(){
    this.message = ' characters are cut';
  }
  public onPaste(){
    this.message = 'characters are past here'
  }
   public doubleclick(){
     window.open('../../../assets/Boat headphones.jpg','earpod','height=400px width=400px')
   }

  constructor() { }

  ngOnInit(): void {
  }

}
