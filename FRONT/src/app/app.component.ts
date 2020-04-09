import { Component, HostListener } from '@angular/core';
import { MENU_BREAKPOINT } from './modules/shared/magic-strings';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from './modules/shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation()]
})
export class AppComponent {

  smallNavbarVisible: boolean;
  constructor() {
    this.smallNavbarVisible = document.documentElement.offsetWidth < MENU_BREAKPOINT;
  }

  @HostListener('window: resize')
  onResize() {
    this.smallNavbarVisible = document.documentElement.offsetWidth < MENU_BREAKPOINT;
  }

  prepareRoute(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;

    return res;
  }
}
