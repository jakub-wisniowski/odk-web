import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Camp2018Component } from "./camp2018.component";
import { MarkdownDisplayComponent } from "../../shared/markdown-display/markdown-display.component";
import { TranslocoTestingModule } from '@ngneat/transloco';

describe("Camp2018Component", () => {
  let component: Camp2018Component;
  let fixture: ComponentFixture<Camp2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Camp2018Component, MarkdownDisplayComponent],
      imports: [TranslocoTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Camp2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
