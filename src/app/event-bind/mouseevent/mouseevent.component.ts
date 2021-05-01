import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouseevent',
  templateUrl: './mouseevent.component.html',
  styleUrls: ['./mouseevent.component.css']
})
export class MouseeventComponent implements OnInit {
  public stoping(e){
    e.target.stop();
  }
  public straing(e){
    e.target.start();

  }
  // dynamically add image
  public pics = ['../../../assets/Boat headphones.jpg','../../../assets/Cupboard.jpg','../../../assets/Diningtable.jpg','../../../assets/Dslrcamera.jpg']

  // mouse over

  public xPosition = ''
  public yPosition = ''
  public styles = {
    'position' : 'fixed',
     'left': '',
     'top': ''
  }
  public getPosition(e){
    this.styles = {
      'position':'fixed',
      'left': e.clientX + 'px',
      'top':e.clientY + 'px'
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
