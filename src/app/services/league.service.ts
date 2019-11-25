import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import  {League } from 'src/app/models/league';
import  * as ritoapi from 'src/app/services/api-key';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http:HttpClient) { }


  Getleaugue(Uniqueid : string)  {

      return this.http.get<League[]>("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+ Uniqueid +"?api_key="+ ritoapi.key
      
   ); }


}
