import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';



@NgModule({
  declarations: [HomepageComponent, AboutpageComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
