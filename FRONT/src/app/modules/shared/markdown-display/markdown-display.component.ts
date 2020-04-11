import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'markdown-display[postBaseUrl][fallbackLg]',
    templateUrl: './markdown-display.component.html'
})
export class MarkdownDisplayComponent implements OnInit {

    @Input()
    postBaseUrl: string;

    @Input()
    fallbackLg: string;

    post: string;
  
    constructor(private translocoService: TranslocoService) { 
      this.translocoService.langChanges$.subscribe(val => this.post = `${this.postBaseUrl}-${val}.md`);
    }
  
    ngOnInit(): void {
      this.post = `${this.postBaseUrl}-${this.translocoService.getActiveLang()}.md`
    }

    onError() {
      this.post = `${this.postBaseUrl}-${this.fallbackLg}.md`
    }
}