import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { routerAnimation } from "./modules/shared/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerAnimation()],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.num === undefined
      ? -1
      : outlet.activatedRouteData.num;
  }
}
