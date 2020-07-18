import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CalendarpageComponent } from './calendarpage/calendarpage.component';
import { CalendarPageService } from './calendarpage.service';
import { CalendarModule, DateAdapter } from '../../../node_modules/angular-calendar';
import { adapterFactory } from '../../../node_modules/angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';








@NgModule({
  declarations: [HomepageComponent, AboutpageComponent, CalendarpageComponent],
  exports: [CalendarpageComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers:[CalendarPageService]
})
export class ContentModule { }
