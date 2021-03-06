import { Injectable } from '@angular/core';
import  * as twitchkey from 'src/app/services/twitch/twitch-key';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  {Twitchuser } from 'src/app/models/twitchuser';
import  {Info } from 'src/app/models/twitchuser';


@Injectable({
  providedIn: 'root'
})
export class InfogetidService {

  constructor(private http:HttpClient) { }

  dd : string;

  Getinfoid( accounts: string){
    
    let headers = new HttpHeaders({
      'Client-ID': 'e24d51xoesfsi2yhxnpe6a5cvhphx1',
      'Accept': 'application/vnd.twitchtv.v5+json' });
   
     

  let options = { headers: headers };

    return this.http.get<Twitchuser>("https://api.twitch.tv/kraken/users?login="+accounts, options);
       
  

  }


  Streaminfo( val: string){
    
    let headers = new HttpHeaders({
      'Client-ID': 'e24d51xoesfsi2yhxnpe6a5cvhphx1',
      'Accept': 'application/vnd.twitchtv.v5+json' });
   
     

  let options = { headers: headers };

    return this.http.get<Info>("https://api.twitch.tv/kraken/streams/"+val, options);
       
  

  }


}
