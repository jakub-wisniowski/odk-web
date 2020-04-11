import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

@Component({
    selector: 'markdown-display[postBaseUrl][fallbackLg]',
    templateUrl: './markdown-display.component.html'
})
export class MarkdownDisplayComponent implements OnInit, OnDestroy {

    @Input()
    postBaseUrl: string;

    @Input()
    fallbackLg: string;

    post: string;

    sub: Subscription;
  
    constructor(private translocoService: TranslocoService) { 
      this.sub = this.translocoService.langChanges$.subscribe(val => this.post = `${this.postBaseUrl}-${val}.md`);
    }
  
    ngOnInit(): void {
      this.post = `${this.postBaseUrl}-${this.translocoService.getActiveLang()}.md`
    }

    onError() {
      this.post = `${this.postBaseUrl}-${this.fallbackLg}.md`
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}