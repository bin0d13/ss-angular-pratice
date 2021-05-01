import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 import { Observable } from 'rxjs-compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/interpolation/card/card.component';
import { DatabindComponent } from './databinding/databind/databind.component';
import { TwowayBindComponent } from './databinding/two-way/twoway-bind/twoway-bind.component';
import { IfdemoComponent } from './ifdemo/ifdemo/ifdemo.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo/switchdemo.component';
import { FordemoComponent } from './fordemo/fordemo/fordemo.component';
import { IterationforComponent } from './iterationFor/iterationfor/iterationfor.component';
import { ShowingComponent } from './showdata/showing/showing.component';
import { LoginComponent } from './login-data/login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { IteratindexComponent } from './iteratindex/iteratindex.component';
import { FiltercompComponent } from './filtercomp/filtercomp.component';
import { StyledemoComponent } from './attribut-dir/styledemo/styledemo.component';
import { NgmodeldemoComponent } from './attribut-dir/ngmodeldemo/ngmodeldemo.component';
import { EventdemoComponent } from './event-bind/eventdemo/eventdemo.component';
import { KeydemoComponent } from './event-bind/keydemo/keydemo.component';
import { MouseeventComponent } from './event-bind/mouseevent/mouseevent.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EventlastComponent } from './event-bind/eventlast/eventlast.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ProductComponent } from './parent-child/product/product.component';
import { ProductFilterComponent } from './parent-child/product-filter/product-filter.component';
import { LifehookComponent } from './lifecycle/lifehook/lifehook.component';
import { ParentingComponent } from './lifecycle/parenting/parenting.component';
import { ChilderComponent } from './lifecycle/childer/childer.component';
import { PipesComponent } from './pipes/pipes.component';
import { SentencecasePipe } from './sentencecase.pipe';
import { SampleService } from './sample.service';
import { SampleconsumeComponent } from './sampleconsume/sampleconsume.component';
import { ImportServiceUseComponent } from './import-service-use/import-service-use.component';
import { TempelateformComponent } from './tempelateform/tempelateform.component';
import { FormStateVslidationComponent } from './form-state-vslidation/form-state-vslidation.component';
import { InputStateValidationComponent } from './input-state-validation/input-state-validation.component';
import { HomeComponent } from './routee/home/home.component';
import { ElectronicsComponent } from './routee/electronics/electronics.component';
import { FootwearComponent } from './routee/footwear/footwear.component';
import { FashionComponent } from './routee/fashion/fashion.component';
import { NotfoundComponent } from './routee/notfound/notfound.component';
import { ReactivedemoComponent } from './reactivedemo/reactivedemo.component';
import { ReactiveNestedDemoComponent } from './reactive-program/reactive-nested-demo/reactive-nested-demo.component';
import { ReactiveBuilderformdemoComponent } from './reactive-program/reactive-builderformdemo/reactive-builderformdemo.component';
import { ReactiveValidatorComponent } from './reactive-program/reactive-validator/reactive-validator.component';
import { SearchComponent } from './routee/search/search.component';
import { CommonModule } from '@angular/common';
import { DetailsCatComponent } from './route-parameter-2/details-cat/details-cat.component';
import { DetailsProdComponent } from './route-parameter-2/details-prod/details-prod.component';
import { DisplayDataService } from './route-parameter-2/display-data.service';


 


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DatabindComponent,
    DatabindComponent,
    TwowayBindComponent,
    IfdemoComponent,
    SwitchdemoComponent,
    FordemoComponent,
    IterationforComponent,
    ShowingComponent,
    LoginComponent,
    RegistrationComponent,
    IteratindexComponent,
    FiltercompComponent,
    StyledemoComponent,
    NgmodeldemoComponent,
    EventdemoComponent,
    KeydemoComponent,
    MouseeventComponent,
    ShoppingCartComponent,
    EventlastComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    ProductFilterComponent,
    LifehookComponent,
    ParentingComponent,
    ChilderComponent,
    PipesComponent,
    SentencecasePipe,
    SampleconsumeComponent,
    ImportServiceUseComponent,
    TempelateformComponent,
    FormStateVslidationComponent,
    InputStateValidationComponent,
    HomeComponent,
    ElectronicsComponent,
    FootwearComponent,
    FashionComponent,
    NotfoundComponent,
    ReactivedemoComponent,
    ReactiveNestedDemoComponent,
    ReactiveBuilderformdemoComponent,
    ReactiveValidatorComponent,
    SearchComponent,
    DetailsCatComponent,
    DetailsProdComponent

    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
   //Observable
  ],
  providers: [DisplayDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
