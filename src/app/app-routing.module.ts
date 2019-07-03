import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ScoresComponent } from './scores/scores.component';
import { PlayersComponent } from './players/players.component';
import { EventsComponent } from './events/events.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GroupsComponent } from './groups/groups.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'watch', component: WatchComponent },
  { path: '**', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
