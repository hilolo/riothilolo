import { Component, OnInit, getDebugNode } from '@angular/core';
import  { BaseService } from './../../services/base.service';
import  {Account } from 'src/app/models/accounts';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  
  myaccount : Account ={ 
    id: 1,
    accountId: 1,
    profileIconId : 1,
    name : '1',
    puuid: '1',
    summonerLevel: 1,
    revisionDate: '1'
  
  }
  
   account = <Account>{};
  constructor(private  baseService:BaseService ) {


   }

  ngOnInit() {
    this.baseService.Getinfo("SOWAL3DOWA1").subscribe((data: Account)=>{
      console.log(data);
      this.account = data;
      console.log("account id " + this.account.id);
  
      
    })
    
   /*
 console.log(this.account);
 undefined cause not load yet from the api

   */
     
  }



}
