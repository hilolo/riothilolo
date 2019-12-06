import { Component, OnInit, getDebugNode } from '@angular/core';
import  { BaseService } from './../../services/base.service';
import  { LeagueService } from './../../services/league.service';
import  { MatchlistService } from './../../services/matchlist.service';
import  { MatchService } from './../../services/match.service';
import  {Account } from 'src/app/models/accounts';
import  {League } from 'src/app/models/league';
import { Matchlist } from 'src/app/models/matchlist';
import  {Match } from 'src/app/models/match';
import { NgxSpinnerService } from "ngx-spinner";
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  4
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
     , private  matchlistService:MatchlistService , private matchService:MatchService,private spinner: NgxSpinnerService
     , private route: ActivatedRoute,) {
    

   }

     ngOnInit() {  

      let namesumm = this.route.snapshot.paramMap.get('summonername');
      console.log(namesumm.replace(" ",""));

      this.spinner.show();



      
    this.baseService.Getinfo("TBLlilpunisher").subscribe((data: Account)=>{
      console.log(data);
      this.account = data;
      this.accountid=data.accountId;
      this.leagueService.Getleaugue( data.id).subscribe((leauguedata: League[])=>{
        this.leagues = leauguedata;       
     this.leagues = this.leagues.filter(item => item.queueType !== "RANKED_TFT" && item.queueType !== "RANKED_FLEX_TT" );

      this.leagues = this.leagues.sort((b,a) => a.queueType.localeCompare(b.queueType));
        
        
      //    console.log("account id " + JSON.stringify(this.leagues) );
             
      })

      

         this.matchlistService.Getmatchlist(this.accountid,0,5 ).subscribe((Matchlistdata: Matchlist)=>{
           

      //  console.log(  Matchlistdata);
         
      
          this.Matchlists=Matchlistdata;
          
          
        
            this.Matchlists.matches.forEach(va => {
            

          this.matchService.GetMatch(va.gameId).subscribe((Matchinfodata: Match)=>{ 
            
            
            va.Matchinfo=Matchinfodata;
            
          
      
        

        
        
          })
        
        });
        
        this.spinner.hide();

        }) 


          
      
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);

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


  public morematches() {

   
    this.spinner.show();


    this.matchlistService.Getmatchlist(this.accountid,0,10 ).subscribe((Matchlistdata: Matchlist)=>{
           

      //  console.log(  Matchlistdata);
         
        
          this.Matchlists=Matchlistdata;
        
          
          
        
            this.Matchlists.matches.forEach(va => {
            

          this.matchService.GetMatch(va.gameId).subscribe((Matchinfodata: Match)=>{ 
            
            
            va.Matchinfo=Matchinfodata;
            
          
      
        

        
        
          })
        
        });
        
        this.spinner.hide();

        }) 
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
   
  }


  

  



}
