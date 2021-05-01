import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-validator',
  templateUrl: './reactive-validator.component.html',
  styleUrls: ['./reactive-validator.component.css']
})
export class ReactiveValidatorComponent implements OnInit {
  // it is configured as a form group
  public frmRegister : FormGroup;
  // it is submitted as a submit
  public submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmRegister = this.fb.group({
      // in this in site called properties
                //in this bellow '' this called value 
      userName : ['', [Validators.required, Validators.minLength(4)]],
      mobile : ['',Validators.required],
      // if you want to muliple required the you have to choose array '[]' like this and you can write inside there
      userEmail: ['',[Validators.required, Validators.email]]
    });


  }
  // it is used to access called accessor
  get frm(){
    return this.frmRegister.controls;
  }
  public onSubmit(){
    this.submitted = true;
    if(this.frmRegister.invalid){
      return;
    } else{
      alert('registred successfully...')
    }
  }

}
