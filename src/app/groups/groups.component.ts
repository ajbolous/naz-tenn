import { Component, OnInit } from '@angular/core';
import { GroupRank } from 'src/model/player';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public rankings: GroupRank[] = [
    { groupName: 'Men A', rankings: [{ name: 'Bolous', games: 10, score: 10, rank: 1 }] },
    { groupName: 'Men B', rankings: [{ name: 'Bolous', games: 10, score: 10, rank: 1 }] },
    { groupName: 'Men C', rankings: [{ name: 'Bolous', games: 10, score: 10, rank: 1 }] },
  ]

  constructor() { }

  
  ngOnInit() {
  }
}
