import { Component, OnInit, Input } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-language-toggle",
  templateUrl: "./language-toggle.component.html",
  styleUrls: ["./language-toggle.component.scss"]
})
export class LanguageToggleComponent implements OnInit {
  @Input()
  dropup = false;

  currentLanguage: string;

  constructor(private translocoService: TranslocoService) {
    this.currentLanguage = this.translocoService.getActiveLang();
  }

  ngOnInit(): void {}

  toggleLanguage(language: string) {
    this.translocoService.setActiveLang(language);
    this.currentLanguage = language;
  }
}
