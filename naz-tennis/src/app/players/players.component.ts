import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
 
  players: {name:string, description:string, league:string}[] = [
    {name: "Bolous Jaber", description: "Very good player, Born in nazareth and plays for 10 years.", league:"Nazareth"},
    {name: "Bolous Jaber", description: "Very good player, Born in nazareth and plays for 10 years.", league:"Nazareth"},
    {name: "Bolous Jaber", description: "Very good player, Born in nazareth and plays for 10 years.", league:"Nazareth"},
    {name: "Bolous Jaber", description: "Very good player, Born in nazareth and plays for 10 years.", league:"Nazareth"}

  ];

  constructor() { }

  ngOnInit() {
  }

}
