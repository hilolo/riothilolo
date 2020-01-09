import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { ProfilComponent } from './general/profil/profil.component';
import { StreamersComponent } from './general/streamers/streamers.component';
import { ErrorComponent } from './general/error/error.component';
import { ChampionsComponent } from './general/champions/champions.component';
import { BestPerchampComponent } from './general/champions/best-perchamp/best-perchamp.component';



const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainComponent },
  {path: 'profil/:summonername', component: ProfilComponent },
  {path: 'Streamers', component: StreamersComponent },
  {path: 'Champions', component: ChampionsComponent },
  {path: 'Champion/:champ', component: BestPerchampComponent },
  { path: '**', component: ErrorComponent }
 
];




@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
