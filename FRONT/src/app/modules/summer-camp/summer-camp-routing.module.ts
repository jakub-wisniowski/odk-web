import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SummerCampComponent } from "./summer-camp.component";
import { Camp2018Component } from "./camp2018/camp2018.component";
import { Camp2019Component } from "./camp2019/camp2019.component";

const routes: Routes = [
  { path: "", component: SummerCampComponent, data: { num: 2 } },
  { path: "camp-2018", component: Camp2018Component, data: { num: 2 } },
  { path: "camp-2019", component: Camp2019Component, data: { num: 3 } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummerCampRoutingModule {}
