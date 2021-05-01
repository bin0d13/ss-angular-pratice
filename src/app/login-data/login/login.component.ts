import { Component, OnInit } from '@angular/core';

import { loginCaptchaService } from '../../login-captcha/login_captcha'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private captcha : loginCaptchaService) {}
  public code = this.captcha.GenerateCode();
  public refreshClick(){
    this.code = this.captcha.GenerateCode();
  }

  ngOnInit(): void {
  }

}
