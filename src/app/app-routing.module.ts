import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routee/home/home.component';
import { ElectronicsComponent } from './routee/electronics/electronics.component';
import { FashionComponent } from './routee/fashion/fashion.component';
import { FootwearComponent } from './routee/footwear/footwear.component';
import {NotfoundComponent } from './routee/notfound/notfound.component'
import { SearchComponent } from './routee/search/search.component';
import { DetailsCatComponent } from './route-parameter-2/details-cat/details-cat.component';
import { DetailsProdComponent } from './route-parameter-2/details-prod/details-prod.component';

 

// const is used to define and initialize the value
// const cant be redeclared and initialize 
//    route is defining as a name you can give any name
//Routes is defining as a routing class
// [] in this square bracket input the collection of routes 
// every route is a object
// path: is how you are excepting to request to the client 
//thats mean in the url what is the excepting to requesting
// components is used to what file you have to show and import give that name of the 
const route: Routes = [
      {path: 'home',component: HomeComponent},
      {path: 'electronics', component: ElectronicsComponent},
      {path: "fashion", component: FashionComponent},
      {path: 'footwear', component : FootwearComponent},
      {path: 'search/:id/:name/:price', component: SearchComponent},
      // this is for route parameter
      {path:'detailCat', component: DetailsCatComponent},
      {path:'detailCat/:id', component: DetailsProdComponent},
      // end is for route parameter
      // this is upper program details
      {path:'notfound', component: NotfoundComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component: NotfoundComponent},
    
      
     
    
];

// this is module 
// modules are marked with @NgModule
@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
// 
export class AppRoutingModule { }
