import {
  Component,
  OnInit,
  HostListener,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { MENU_BREAKPOINT } from "src/app/modules/shared/magic-strings";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  menuVisible = false;

  logoClickable: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.logoClickable) this.menuVisible = true;
      }
    });
  }

  ngOnInit(): void {
    this.logoClickable = document.documentElement.offsetWidth < MENU_BREAKPOINT;
    if (this.logoClickable) this.menuVisible = false;
  }

  toggleMenu() {
    if (this.logoClickable) {
      this.menuVisible = !this.menuVisible;
    }
  }

  @HostListener("window: resize")
  onResize() {
    this.logoClickable = document.documentElement.offsetWidth < MENU_BREAKPOINT;

    if (!this.logoClickable) {
      this.menuVisible = true;
    }
  }
}
