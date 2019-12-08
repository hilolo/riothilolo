import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { ProfilComponent } from './general/profil/profil.component';
import { ErrorComponent } from './general/error/error.component';


const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainComponent },
  {path: 'profil/:summonername', component: ProfilComponent },
  { path: '**', component: ErrorComponent }
 
];




@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
