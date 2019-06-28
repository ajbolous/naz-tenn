import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public men: { name: string, description: string, league: string }[] = [
    { name: "Bolous AbuJaber", description: "10 Yeras tennis player, Righ handed", league: "Haifa" },
    { name: "Osama AbuJaber", description: "More than 10 years experience", league: "Haifa" },
    { name: "Tarek Salloum", description: "A young but promising tennis player", league: "Nazareth" },
    { name: "Waseem Mazzawi", description: "Excellent tennis player", league: "Nazareth" },
  ];

  public women: { name: string, description: string, league: string }[] = [
    { name: "Layal Ammouri", description: "The best female tennis player in Nazareth", league: "Nazareth" },
    { name: "Sharifeh Safadi", description: "One of the greatest of all times", league: "Nazareth" },
  ];


  constructor() { }

  ngOnInit() {
  }

}
