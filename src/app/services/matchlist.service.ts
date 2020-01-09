import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matchlist } from '../models/matchlist';
import { Match } from '../models/match';
import  * as ritoapi from 'src/app/services/api-key';

@Injectable({
  providedIn: 'root'
})
export class MatchlistService {

  constructor(private http:HttpClient) { }


  Getmatchlist(Accountid : string, star : number, end : number)  {

   
      return this.http.get<Matchlist>("https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/"+ Accountid +"?endIndex="+  end +"&beginIndex="+ star +"&api_key="+ ritoapi.key
      
   ); }



   Getmatchlistperq(Accountid : string, star : number,end : number, queneid : number)  {

   
    return this.http.get<Matchlist>("https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/"+ Accountid +"?endIndex="+  end +"&queue="+  queneid +"&beginIndex="+ star +"&api_key="+ ritoapi.key
    
 ); }




}
