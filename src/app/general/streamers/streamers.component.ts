import { Component, OnInit } from '@angular/core';
import  { InfogetidService } from './../../services/twitch/infogetid.service';
import  {Twitchuser } from 'src/app/models/twitchuser';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.css']
})
export class StreamersComponent implements OnInit {

  constructor(private  infogetidService:InfogetidService) { }

  users :Twitchuser;
  ngOnInit() {
    
    let datas: string[] = ['dreamerzlel', 'a_couple_streams', 'kasaikogaming']; 
    this.infogetidService.Getinfoid(datas).subscribe( ar => {
        this.users=ar;
        ar.users[0].stream= null;
        if(!ar.users[0].stream)
        {
        console.log(ar.users[0] );
      }
    }, err => 
    {
        console.log("account not found" ,err );
      
    }
    
    
    );
  }

}
