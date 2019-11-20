import { Component, OnInit, getDebugNode } from '@angular/core';
import  { BaseService } from './../../services/base.service';
import  { LeagueService } from './../../services/league.service';
import  {Account } from 'src/app/models/accounts';
import  {League } from 'src/app/models/league';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  
  myaccount : Account ={ 
    id: '1',
    accountId: '1',
    profileIconId : 1,
    name : '1',
    puuid: '1',
    summonerLevel: 1,
    revisionDate: '1'
  
  }
  
   account = <Account>{};
   leagues = <League[]>{};
   accountid :string;
  constructor(private  baseService:BaseService, private  leagueService:LeagueService) {
    LeagueService

   }

  ngOnInit() {


    this.baseService.Getinfo("WIZHID").subscribe((data: Account)=>{
      console.log(data);
      this.account = data;
      this.accountid=data.accountId;
      this.leagueService.Getleaugue( data.id).subscribe((leauguedata: League[])=>{
  
        this.leagues = leauguedata;
        
    //ad

       
        this.leagues = this.leagues.filter(item => item.queueType !== "RANKED_TFT" && item.queueType !== "RANKED_FLEX_TT" );

        this.leagues = this.leagues.sort((b,a) => a.queueType.localeCompare(b.queueType))
        console.log("account id " + JSON.stringify(this.accountid) );
        

        
          


    
        
      })
      
  
      
    })

    
   
/*
show data in json
  console.log("leaugue id " + JSON.stringify(this.league) );
  /*


    
   /*
 console.log(this.account);
 undefined cause not load yet from the api

   */
     
  }



}
