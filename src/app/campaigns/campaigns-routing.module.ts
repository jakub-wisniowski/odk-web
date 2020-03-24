import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns.component';

// TODO: remove wildcard
const routes: Routes = [{ path: '', component: CampaignsComponent }, {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
