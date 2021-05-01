import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent implements OnInit {
  public userId = [
    {userName:'binod'},
    {userName:'binod123'},
    {userName:'binod@'},
    {userName:'binod143'},
    {userName:'binodku'},
  ]
  public username ='' ;
  public msg = '';
  public isValid = false;
  public isInValide = false;
  // for password
  public password = '';
  public warn = false;
 
  // for regular expression
  public regexp = /(?=.*[A-Z])\w{4,10}/;
  public strength = '';
  public verifyreg(){
    if(this.password.match(this.regexp)){
      this.strength = 'strong password';
    } else{
      if(this.password.length<4){
        this.strength = 'poor password';
      } else{
        this.strength = 'weak password';
      }
    }
  }
  // this is for password
  public varifypwd(e){
    if(e.keyCode>=65 && e.keyCode<=90){
      this.warn = true;
    } else {
      this.warn = false
    }
  }
  //this is for user name
  public varifuser(){
     for(let user of this.userId){
       if(user.userName == this.username){
          this.msg = 'user name already taken please try another one';
          this.isValid = false;
          this.isInValide = true;
          break;
       } else{
         this.msg= 'username available ';
         this.isValid = true;
         this.isInValide = false;
       }
     }
  }

  constructor() { }



  ngOnInit(): void {
  }

}
