import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDisplayComponent } from './markdown-display/markdown-display.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [MarkdownDisplayComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
  ],
  exports: [MarkdownDisplayComponent]
})
export class SharedModule { }
