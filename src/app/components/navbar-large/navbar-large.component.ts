import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-large',
  templateUrl: './navbar-large.component.html',
  styleUrls: ['./navbar-large.component.scss']
})
export class NavbarLargeComponent implements OnInit {
  activeRoute: string;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    })
  }

  ngOnInit(): void {
  }

}
