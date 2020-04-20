import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: HomeComponent, data: {num: 1} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class HomeRoutingModule { }

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    TranslocoModule
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'home'}],
})
export class HomeModule { }

