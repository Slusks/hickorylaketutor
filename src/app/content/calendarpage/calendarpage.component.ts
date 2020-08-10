import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {CalendarPageService } from '../calendarpage.service'
import { AuthService } from '@app/AuthenticationPackage/core/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { customEvent } from './customEvent'
import { FormBuilder } from '@angular/forms';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendarpage',
  templateUrl: './calendarpage.component.html',
  styleUrls: ['./calendarpage.component.scss']
})
export class CalendarpageComponent implements OnInit{




  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();
/* This is going to need to be replaced with a function for people to add events*/
events: CalendarEvent[]; /* = [
  {
    title: 'An event',
    start: new Date(),
    color: colors.red,
  },
];*/

  activeDayIsOpen: boolean = false;
  public sessionData;
  public userData;
  public userAuth;
  public userEvents;
  public userForm;

  constructor(
    private modal: NgbModal,
    public calService: CalendarPageService,
    public authService: AuthService,
    public db: AngularFirestore,
    public afd: AngularFireDatabase,
    private fb: FormBuilder) {

      this.authService.user$.subscribe(res =>{this.userAuth = res, console.log("res", res)})
    
      this.userData = db.collection(`/users`).valueChanges();
          
      this.sessionData = db.collection('/sessions').valueChanges().subscribe((res:CalendarEvent[]) =>{
        this.events = res, 
        console.log("events", this.events),
        this.userForm(res)})
        /*What I think i need to do here is right a function that converts the incoming firebase output to an event object*/
     }


  ngOnInit(){
    let testDate = new Date().getTime()
    console.log(testDate)
 
  }


  createForm(userInfo) {
    this.userForm = this.fb.group({
      lastName: [userInfo.lastName]

    });
  }
/*
  save(formValue){
    this.userService.updateUserData(formValue);
    this.userUpdated = true; }
    
  }*/





  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log("events.length", events.length)
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }
/*This will also need to be edited with a firestore subscription*/
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: this.userData.lastName || "Open Session",
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  submitEvent(): void{
    alert("In work")
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
