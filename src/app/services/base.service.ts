import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import  {Account } from 'src/app/models/accounts';
import  * as ritoapi from 'src/app/services/api-key';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient){}
  
  
    Getinfo(user : string)  {

     

       return this.http.get<Account>("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ user+ "?api_key="+ ritoapi.key
       
    ); }

  


}
