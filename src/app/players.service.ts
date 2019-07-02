import { Injectable } from '@angular/core';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  GetMalePlayers(): User[] {
    return [];
  }

  GetFemalePlayers(): User[] {
    return [];
  }

}
