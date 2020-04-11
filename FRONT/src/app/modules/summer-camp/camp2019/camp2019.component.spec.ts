import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Camp2019Component } from "./camp2019.component";
import { MarkdownDisplayComponent } from "../../shared/markdown-display/markdown-display.component";
import { TranslocoTestingModule } from '@ngneat/transloco';

describe("Camp2019Component", () => {
  let component: Camp2019Component;
  let fixture: ComponentFixture<Camp2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Camp2019Component, MarkdownDisplayComponent],
      imports: [TranslocoTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Camp2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
