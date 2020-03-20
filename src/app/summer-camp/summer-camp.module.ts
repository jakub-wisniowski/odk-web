import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummerCampRoutingModule } from './summer-camp-routing.module';
import { SummerCampComponent } from './summer-camp.component';


@NgModule({
  declarations: [SummerCampComponent],
  imports: [
    CommonModule,
    SummerCampRoutingModule
  ]
})
export class SummerCampModule { }
