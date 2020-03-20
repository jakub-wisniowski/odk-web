import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "campaigns",
    loadChildren: () =>
      import("./campaigns/campaigns.module").then(m => m.CampaignsModule)
  },
  {
    path: "education",
    loadChildren: () =>
      import("./education/education.module").then(m => m.EducationModule)
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "readings",
    loadChildren: () =>
      import("./readings/readings.module").then(m => m.ReadingsModule)
  },
  {
    path: "resources",
    loadChildren: () =>
      import("./resources/resources.module").then(m => m.ResourcesModule)
  },
  {
    path: "summer-camp",
    loadChildren: () =>
      import("./summer-camp/summer-camp.module").then(m => m.SummerCampModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
