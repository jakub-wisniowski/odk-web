import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarLargeComponent } from "./navbar-large.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("NavbarLargeComponent", () => {
  let component: NavbarLargeComponent;
  let fixture: ComponentFixture<NavbarLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLargeComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
