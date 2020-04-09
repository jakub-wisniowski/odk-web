import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationComponent } from './education.component';

const routes: Routes = [{ path: '', component: EducationComponent, data: {num: 4} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
