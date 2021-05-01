import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-builderformdemo',
  templateUrl: './reactive-builderformdemo.component.html',
  styleUrls: ['./reactive-builderformdemo.component.css']
})
export class ReactiveBuilderformdemoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public frmRegister= this.fb.group({
    name: [],
    price: [],
    frmDetails:this.fb.group({
      ship:[],
      stock: []
    }),
    // this is for array 
    arrayControls : this.fb.array([this.fb.control('')])

  })
  // array purpose
  // it is a accessor
  get arrayControls(){
    return this.frmRegister.get('arrayControls') as FormArray;
  }
  public addPhoto(){
    this.arrayControls.push(this.fb.control(''));
  }
  public removePhoto(i){
    this.arrayControls.removeAt(i);
  }

  ngOnInit(): void {
  }

}
