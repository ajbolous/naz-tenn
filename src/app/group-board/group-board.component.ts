import { Component, OnInit, Input } from '@angular/core';
import { GroupRank } from 'src/model/player';

@Component({
  selector: 'app-group-board',
  templateUrl: './group-board.component.html',
  styleUrls: ['./group-board.component.css']
})
export class GroupBoardComponent implements OnInit {

  @Input() groupRanking: GroupRank = {groupName:"", rankings:[]};

  displayColumns: string[] = ['rank', 'name', 'games', 'score'];

  constructor() { }

  ngOnInit() {
  }

}
