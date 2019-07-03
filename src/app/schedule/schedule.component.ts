import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { AngularFireDatabase, } from '@angular/fire/database';
import { ScheduleEvent } from 'src/model/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  isLoading = false;
  viewDate: Date = new Date();
  events: Array<CalendarEvent> = [];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
  }

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.isLoading = true;

    this.db.list('/matches').valueChanges().subscribe((matches: ScheduleEvent[]) => {
      const newEventsList: Array<CalendarEvent> = [];
      matches.forEach(match => {
        let color = 'deepskyblue';
        if (match.type === 'rain') {
          color = 'red';
        } else if (match.type === 'holiday') {
          color = 'violet';
        } else if (match.type === 'match') {
          color = 'orange';
        }

        newEventsList.push({
          title: match.title,
          start: new Date(match.startTime),
          end: new Date(match.endTime),
          allDay: match.allDay,
          color: { primary: color, secondary: '#fefefe' }
        });
      });

      this.isLoading = false;
      this.events = newEventsList;
    });
  }


}
