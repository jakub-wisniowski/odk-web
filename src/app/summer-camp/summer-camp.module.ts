import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummerCampRoutingModule } from './summer-camp-routing.module';
import { SummerCampComponent } from './summer-camp.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [SummerCampComponent],
  imports: [
    CommonModule,
    SummerCampRoutingModule,
    TranslocoModule
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'summerCamp'}],
})
export class SummerCampModule { }
