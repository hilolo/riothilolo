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

    //https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/HSgrd-CsrXqGwkAS7qG6GQwWzkFEBt4iYMwrBQG0CtmKPJHI?api_key=RGAPI-30f6e788-4a98-4928-ac90-70ff28795f9a
      return this.http.get<League[]>("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+ Uniqueid +"?api_key="+ ritoapi.key
      
   ); }


}
