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

  userstv :Twitchuser;
  qr ='';
  ngOnInit() {
  


  
    
    let datas: string[] = ['dreamerzlel', 'kasaikogaming','loltyler1']; 
    
    datas.forEach((item, index, arr) => {
      if(!arr[index + 1])  this.qr += item;
      else this.qr += item+',';
     
    })
    
 
    this.infogetidService.Getinfoid(this.qr).subscribe( ar => {
        this.userstv=ar;
      
       

        this.userstv.users.forEach(at =>  {
        this.infogetidService.Streaminfo(at._id).subscribe( aq => {
          
    
          at.stream=aq;
        }
        );
      });
   
      console.log( this.userstv);
     


    }, err => 
    {
        console.log("account not found" ,err );
      
    }
    
    
    );
  }

}
