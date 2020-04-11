import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LanguageToggleComponent } from "./language-toggle.component";
import { TranslocoTestingModule } from '@ngneat/transloco';

describe("LanguageToggleComponent", () => {
  let component: LanguageToggleComponent;
  let fixture: ComponentFixture<LanguageToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageToggleComponent],
      imports:[TranslocoTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
