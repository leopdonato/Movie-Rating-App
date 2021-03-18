import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FeedbackComponent } from './modals/feedback/feedback.component';



@NgModule({
  declarations: [HeaderComponent, FeedbackComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FeedbackComponent
  ]
})
export class CoreModule { }
