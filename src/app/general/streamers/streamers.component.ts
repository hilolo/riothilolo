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
    this.getAllData();

  
   


  }

  async getAllData() {
 
    
    let datas: string[] = ['mimiczxc','mr_kaplan','busioc','d_blackmamba','kasaikogaming','loltyler1']; 
    
    datas.forEach((item, index, arr) => {
      if(!arr[index + 1])  this.qr += item;
      else this.qr += item+',';
     
    })
    
 
    this.infogetidService.Getinfoid(this.qr).subscribe( ar => {
        this.userstv=ar;

      //waste of energie and time im stupid  
          this.userstv.users.forEach(ar => {
          ar.live="0";
        }

        )
      
        
        

        this.userstv.users.forEach((at,index) =>  {
         this.infogetidService.Streaminfo(at._id).subscribe( aq => {
         
          at.info=aq;
        if(aq.stream) at.live="10"; else  at.live="0";
       
          this.userstv.users = this.userstv.users.sort((b,a) => a.live.localeCompare(b.live));
       
      
      
          

         
        }
        
        );
       
      }
      
      );
   

      
      console.log( this.userstv);
    
      

    }, err => 
    {
        console.log("account not found" ,err );
      
    }
    
    
    );


    console.log('finish');
   
  }

}
