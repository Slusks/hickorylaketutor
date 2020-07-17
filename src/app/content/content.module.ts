import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CalendarpageComponent } from './calendarpage/calendarpage.component';
import { CalendarModule, DateAdapter } from '../../../node_modules/angular-calendar';
import { adapterFactory } from '../../../node_modules/angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [HomepageComponent, AboutpageComponent, CalendarpageComponent],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class ContentModule { }
