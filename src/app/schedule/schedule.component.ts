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
  weekView = true;
  viewDate: Date = new Date();
  events: Array<CalendarEvent> = [];

  dayHeaderClicked(event : any) {
    console.log(event);
    this.viewDate = event.day.date;
    this.weekView = false;
  }

  BackToWeekView() {
    this.weekView = true;
  }

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.isLoading = true;

    this.db.list('/matches').valueChanges().subscribe((matches: ScheduleEvent[]) => {
      const newEventsList: Array<CalendarEvent> = [];
      matches.forEach(match => {
        let color = 'deepskyblue';
        let secColor = 'white';
        if (match.type === 'rain') {
          color = 'red';
          secColor = 'orangered';
        } else if (match.type === 'holiday') {
          color = 'violet';
        } else if (match.type === 'match') {
          color = 'orangered';
        } else if (match.type === 'train') {
          color = 'blue';
        }

        newEventsList.push({
          title: match.title,
          start: new Date(match.startTime),
          end: new Date(match.endTime),
          allDay: match.allDay,
          color: { primary: color, secondary: secColor }
        });
      });

      this.isLoading = false;
      this.events = newEventsList;
    });
  }
}
