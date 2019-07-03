import { Component, OnInit } from '@angular/core';
import { CalendarMonthViewDay, CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  viewDate: Date = new Date();

  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
    {
      title: 'No tennis - Rain',
      color: { primary: 'red', secondary: 'white' },
      start: new Date(),
      allDay: true
    },

    {
      title: 'No tennis - Holiday',
      color: { primary: 'red', secondary: 'white' },
      start: new Date(2019, 6, 4),
      allDay: true
    },
    {
      title: 'Bolous - Stefan',
      color: { primary: 'deepskyblue', secondary: 'white' },
      start: new Date(2019, 6, 2, 19, 30),
      end: new Date(2019, 6, 2, 21, 30)
    },
    {
      title: 'Bolous/Hisham - Stefan/Fouad',

      color: { primary: 'deepskyblue', secondary: 'white' },
      start: new Date(2019, 6, 5, 19, 30),
      end: new Date(2019, 6, 5, 21, 30)
    }
  ];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
  }

  constructor() { }

  ngOnInit() {
  }


}
