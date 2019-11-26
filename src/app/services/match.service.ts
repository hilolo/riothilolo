import { Injectable } from '@angular/core';
import  {Match } from 'src/app/models/match';
import { HttpClient } from '@angular/common/http';
import  * as ritoapi from 'src/app/services/api-key';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http:HttpClient) { }


  GetMatch(matchid : number)  {

   
    return this.http.get<Match>("https://euw1.api.riotgames.com/lol/match/v4/matches/"+ matchid +"?api_key="+ ritoapi.key
    
 ); }


}
