import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLargeComponent } from './navbar-large.component';

describe('NavbarLargeComponent', () => {
  let component: NavbarLargeComponent;
  let fixture: ComponentFixture<NavbarLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
