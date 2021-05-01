import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public title = "welcome To Typescript";

  public upperCase = 'binod';
  public decimals = 20005.5003;
  public mfd = new Date('2021/4/17');
  public sales = 0.259;
  public products = ['tv','frezze','shoe','sandel']
  //this for key and value

  product : {[key:number]:string} = {1:"tv", 2:'freeze'}
  public product1 = ['tv','frezze','shoe']
  // I18nSelecctPipe

  public stsatusProduct = {
    'hyderabad' : 'delivary in 2 days',
    'delhi' : 'delivary in 4 days',
    'mumbai' : ' not delivary here',
  }
  productName = 'samsung tv';
  city="mumbai";
  public details= [
    {name:'samsung tv', city:'delhi'},
    {name:'freeze', city:'delhi'},
    {name:'shoes', city:'delhi'},
    {name:'t-shirt', city:'hyderabad'},
    {name:'watch', city:'mumbai'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
