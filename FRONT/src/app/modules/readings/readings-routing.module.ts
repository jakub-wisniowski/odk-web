import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadingsComponent } from './readings.component';

const routes: Routes = [{ path: '', component: ReadingsComponent, data: {num: 6} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingsRoutingModule { }
