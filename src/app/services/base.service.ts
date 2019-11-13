import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import  {Account } from 'src/app/models/accounts';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient){}
  
  
    Getinfo(user : string)  {

     /* const headers: HttpHeaders = new HttpHeaders({
        "X-Riot-Token" : 'RGAPI-6f061b8c-bc48-4658-bc61-101ff0916fb7', 
        "content-type" : "application/json"
    });*/

    // let params = new HttpParams().set("paramName",('hi'));
/*
      const options = {
            headers: headers,
            params: params
        };*/

       /* let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Origin','https://developer.riotgames.com');
*/
       return this.http.get<Account>("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ user+ "?api_key=RGAPI-6f061b8c-bc48-4658-bc61-101ff0916fb7"
       
    ); }

  


}
