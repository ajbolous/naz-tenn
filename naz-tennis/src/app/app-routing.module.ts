import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ScoresComponent } from './scores/scores.component';
import { PlayersComponent } from './players/players.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'players', component: PlayersComponent },
  { path: '**',  component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
