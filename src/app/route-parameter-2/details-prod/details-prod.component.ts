import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DisplayDataService } from '../display-data.service';

@Component({
  selector: 'app-details-prod',
  templateUrl: './details-prod.component.html',
  styleUrls: ['./details-prod.component.css']
})
export class DetailsProdComponent implements OnInit {
  public catDetails;
  public catProdu = [];

  constructor(private data: DisplayDataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.catDetails = this.route.snapshot.paramMap.get('id');
    this.catProdu = this.data.GetProductDetails().filter(x=>x.CategoryId==this.catDetails)
  }
  public clickDet(item){
    this.router.navigate(["prods",item.proName],{relativeTo: this.route});

  }
}
