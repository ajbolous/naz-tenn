import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  playDates = [
    { id: 1, day: new Date(1, 7, 2019) },
    { id: 2, day: new Date(2, 7, 2019) },
    { id: 3, day: new Date(3, 7, 2019) },
    { id: 4, day: new Date(4, 7, 2019) },
    { id: 5, day: new Date(5, 7, 2019) }
  ]

  scores = [
    {
      winner: 'Bolous', loser: 'Tarek', sets: [[6, 4], [6, 3]]
    },
    {
      winner: 'Tarek', loser: 'Tarek', sets: [[6, 4], [2, 6], [6,4]]
    },
    {
      winner: 'Tarek', loser: 'Ward', sets: [[6, 2], [2, 6], [6,1]]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
