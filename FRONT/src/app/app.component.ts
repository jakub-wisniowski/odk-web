import { Component, HostListener } from '@angular/core';
import { MENU_BREAKPOINT } from './modules/shared/magic-strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}
