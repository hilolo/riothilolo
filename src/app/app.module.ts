import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProfilComponent } from './general/profil/profil.component';
import { ErrorComponent } from './general/error/error.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SummonerSpellPipe } from './pipe/summoner-spell.pipe';
import { ChampionnamePipe } from './pipe/championname.pipe';
import { ShortnumberPipe } from './pipe/shortnumber.pipe';

import { NgxSpinnerModule } from "ngx-spinner";
import { QuennePipe } from './pipe/quenne.pipe';
import { StreamersComponent } from './general/streamers/streamers.component';
import { DivisionsComponent } from './general/profil/divisions/divisions.component';
import { MatchesComponent } from './general/profil/matches/matches.component';
import { ChampionsComponent } from './general/champions/champions.component';
import { BestPerchampComponent } from './general/champions/best-perchamp/best-perchamp.component';
import { MmrdivisionPipe } from './pipe/mmrdivision.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProfilComponent,
    ErrorComponent,
    SummonerSpellPipe,
    ChampionnamePipe,
    ShortnumberPipe,
    QuennePipe,
    StreamersComponent,
    DivisionsComponent,
    MatchesComponent,
    ChampionsComponent,
    BestPerchampComponent,
    MmrdivisionPipe,
    
   
  


    
   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
