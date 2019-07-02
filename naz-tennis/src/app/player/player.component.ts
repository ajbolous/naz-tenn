import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: User;
  constructor() { }

  ngOnInit() {
  }

}
