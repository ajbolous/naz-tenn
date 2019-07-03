import { Component, OnInit } from '@angular/core';
import { ScheduleEvent } from 'src/model/schedule';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public newEvent: { title: string, date: Date, startHour: number, endHour: number, allDay: boolean, type: string } = {
    title: '',
    date: new Date(),
    startHour: 12,
    endHour: 14,
    allDay: false,
    type: 'event'
  };


  AddEvent() {

    const startTime = new Date(this.newEvent.date.getFullYear(), this.newEvent.date.getMonth(), this.newEvent.date.getDay(), this.newEvent.startHour + 1);
    const endTime = new Date(this.newEvent.date.getFullYear(), this.newEvent.date.getMonth(), this.newEvent.date.getDay(), this.newEvent.endHour + 1);
    const ev = { title: this.newEvent.title, startTime: startTime.valueOf(), endTime: endTime.valueOf(), type: this.newEvent.type, allDay: this.newEvent.allDay };
    console.log(ev);
    this.db.list('/matches').push(ev);
  }

  ResetEvent() {

  }

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  }

}
