import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummerCampComponent } from './summer-camp.component';

const routes: Routes = [{ path: '', component: SummerCampComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummerCampRoutingModule { }
