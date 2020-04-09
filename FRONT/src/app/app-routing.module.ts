import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {num: 1}
  },
  {
    path: "campaigns",
    loadChildren: () =>
      import("./modules/campaigns/campaigns.module").then(m => m.CampaignsModule)
  },
  {
    path: "education",
    loadChildren: () =>
      import("./modules/education/education.module").then(m => m.EducationModule)
  },
  {
    path: "readings",
    loadChildren: () =>
      import("./modules/readings/readings.module").then(m => m.ReadingsModule)
  },
  {
    path: "resources",
    loadChildren: () =>
      import("./modules/resources/resources.module").then(m => m.ResourcesModule)
  },
  {
    path: "summer-camp",
    loadChildren: () =>
      import("./modules/summer-camp/summer-camp.module").then(m => m.SummerCampModule)
  },
  {
    path: "**",
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
