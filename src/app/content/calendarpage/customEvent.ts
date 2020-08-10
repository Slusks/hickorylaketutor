
import { CalendarEvent } from 'angular-calendar';

export interface customEvent extends CalendarEvent {
    "lastName": string;
    "uid": string;
    "open": Boolean;
}
