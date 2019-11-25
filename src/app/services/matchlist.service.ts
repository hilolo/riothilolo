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


   Matchinfo(matchid : number)  {

   
    return this.http.get<Match[]>("https://euw1.api.riotgames.com/lol/match/v4/matches/"+ matchid +"?api_key="+ ritoapi.key
    
 ); }





}
