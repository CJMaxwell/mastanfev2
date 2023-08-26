import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
