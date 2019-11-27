import { Component, OnInit, getDebugNode } from '@angular/core';
import  { BaseService } from './../../services/base.service';
import  { LeagueService } from './../../services/league.service';
import  { MatchlistService } from './../../services/matchlist.service';
import  { MatchService } from './../../services/match.service';
import  {Account } from 'src/app/models/accounts';
import  {League } from 'src/app/models/league';
import { Matchlist } from 'src/app/models/matchlist';
import  {Match } from 'src/app/models/match';







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
   leagues = <League[]> [];
   Matchlists = <Matchlist> {};
   Match = <Match> {};
   timeLeft: number = 60;
   
   accountid :string;
  

    
  constructor(private  baseService:BaseService, private  leagueService:LeagueService
     , private  matchlistService:MatchlistService , private matchService:MatchService) {
    LeagueService

   }

     ngOnInit() {  

     



      
    this.baseService.Getinfo("capman").subscribe((data: Account)=>{
      console.log(data);
      this.account = data;
      this.accountid=data.accountId;
      this.leagueService.Getleaugue( data.id).subscribe((leauguedata: League[])=>{
        this.leagues = leauguedata;       
     this.leagues = this.leagues.filter(item => item.queueType !== "RANKED_TFT" && item.queueType !== "RANKED_FLEX_TT" );

      this.leagues = this.leagues.sort((b,a) => a.queueType.localeCompare(b.queueType));
        
        
      //    console.log("account id " + JSON.stringify(this.leagues) );
             
      })

      

         this.matchlistService.Getmatchlist(this.accountid,0,5).subscribe((Matchlistdata: Matchlist)=>{
           

        console.log(  Matchlistdata);
         
         
          this.Matchlists=Matchlistdata;
          
          
        
            this.Matchlists.matches.forEach(va => {
            

          this.matchService.GetMatch(va.gameId).subscribe((Matchinfodata: Match)=>{ 
            
            
            va.Matchinfo=Matchinfodata;
            
          
        console.log(this.accountid);
        

        
        
          })
        
        });
        


        }) 


          
      


     //this.Matchinfo(4295648398);
        
        
      
  
      
    })


   
/*
show data in json
  console.log("leaugue id " + JSON.stringify(this.league) );
  /*


    /
    
    multiple matches
    for (var k in Matchlistdata.matches) {
          this.Matchlists.matches.push(Matchlistdata.matches[k]);
          }*/
    
   /*
 console.log(this.account);
 undefined cause not load yet from the api

   */
     
  }


  

  



}
