import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sampleconsume',
  templateUrl: './sampleconsume.component.html',
  styleUrls: ['./sampleconsume.component.css']
})
export class SampleconsumeComponent implements OnInit {
  // you can write with variable by using public private protected because if you using this variable then you can access any where in this file 

 
  constructor( sampleservice: SampleService) {
    // this is using variables
    // constructor(private sampleservice: SampleService) {
    sampleservice.GetData();
    sampleservice.postData();
   }

  ngOnInit(): void {
    // this is using variable and acccess any where
    // this.sampleservice.GetData();
    // this.sampleservice.postData()
  }

}
