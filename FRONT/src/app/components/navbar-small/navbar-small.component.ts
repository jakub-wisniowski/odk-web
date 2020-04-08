import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar-small',
  templateUrl: './navbar-small.component.html',
  styleUrls: ['./navbar-small.component.scss']
})
export class NavbarSmallComponent implements OnInit {
  activeRoute: string;

  submenusVisible = {};

  menuVisible = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.menuVisible = false;
        this.submenusVisible = {};
        this.activeRoute = event.url;
      }
    })
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  toggleSubmenu(name: string) {
    this.submenusVisible[name] = !this.submenusVisible[name];
  }

}
