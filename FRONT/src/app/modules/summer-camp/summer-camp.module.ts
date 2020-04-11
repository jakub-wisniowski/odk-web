import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SummerCampRoutingModule } from "./summer-camp-routing.module";
import { SummerCampComponent } from "./summer-camp.component";
import { TRANSLOCO_SCOPE, TranslocoModule } from "@ngneat/transloco";
import { Camp2018Component } from "./camp2018/camp2018.component";
import { Camp2019Component } from "./camp2019/camp2019.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SummerCampComponent, Camp2018Component, Camp2019Component],
  imports: [
    CommonModule,
    SharedModule,
    SummerCampRoutingModule,
    TranslocoModule,
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: "summerCamp" }],
})
export class SummerCampModule {}
