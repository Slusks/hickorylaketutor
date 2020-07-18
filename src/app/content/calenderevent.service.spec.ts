import { TestBed } from '@angular/core/testing';

import { CalendarPageService } from './calendarpage.service';

describe('CalendereventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarPageService = TestBed.get(CalendarPageService);
    expect(service).toBeTruthy();
  });
});
