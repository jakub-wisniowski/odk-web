import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingsRoutingModule } from './readings-routing.module';
import { ReadingsComponent } from './readings.component';


@NgModule({
  declarations: [ReadingsComponent],
  imports: [
    CommonModule,
    ReadingsRoutingModule
  ]
})
export class ReadingsModule { }
