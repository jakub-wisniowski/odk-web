import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDisplayComponent } from './markdown-display/markdown-display.component';
import { MarkdownModule } from 'ngx-markdown';
import { OdkButtonComponent } from './odk-button/odk-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MarkdownDisplayComponent, OdkButtonComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    RouterModule
  ],
  exports: [MarkdownDisplayComponent, OdkButtonComponent]
})
export class SharedModule { }
