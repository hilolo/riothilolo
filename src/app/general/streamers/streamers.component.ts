import { Component, OnInit, Input } from "@angular/core";
import { InfogetidService } from "./../../services/twitch/infogetid.service";
import { Twitchuser } from "src/app/models/twitchuser";
import { User } from "src/app/models/twitchuser";

@Component({
  selector: "app-streamers",
  templateUrl: "./streamers.component.html",
  styleUrls: ["./streamers.component.css"]
})
export class StreamersComponent implements OnInit {
  constructor(private infogetidService: InfogetidService) {}

  userstv: Twitchuser;
  userstoShow: User[] = [];

  qr = "";
  @Input() searchtext: string;
  async ngOnInit() {
    await this.getAllData();
    console.log(this.userstv.users[6].info);
    await this.getUsersInfo();
    console.log(this.userstv.users[6].info);
    await this.getUsersInfo();
    this.Sortinfo();
  }

  search() {
    this.userstoShow = this.userstv.users.filter(users =>
      users.display_name.includes(this.searchtext)
    );
  }

  async getAllData() {
    let datas: string[] = [
      "mimiczxc",
      "mr_kaplan",
      "busioc",
      "d_blackmamba",
      "kasaikogaming",
      "loltyler1",
      "cmgriffing"
    ];

    datas.forEach((item, index, arr) => {
      if (!arr[index + 1]) this.qr += item;
      else this.qr += item + ",";
    });

    this.userstv = await this.infogetidService.Getinfoid(this.qr).toPromise();
    this.userstoShow = this.userstv.users;
    /* 
    this.infogetidService.Getinfoid(this.qr).subscribe(
      async (ar) => {
        this.userstv = ar;
        this.userstoShow = ar.users;

        //waste of energie and time im stupid
       this.userstv.users.forEach(ar => {
          ar.live = "0";
        });

        for(let user of this.userstv.users) {
          let tempInfo = await this.infogetidService.Streaminfo(user._id).toPromise();
          user.info = tempInfo;
          if (user.info.stream) {
            user.live = "10";
          } else {
            user.live = "0";
          }
        }

        this.userstv.users.forEach((at, index) => {
          this.infogetidService.Streaminfo(at._id).subscribe(aq => {
            at.info = aq;
            if (aq.stream) at.live = "10";
            else at.live = "0";

            this.userstv.users = this.userstv.users.sort((b, a) =>
              a.live.localeCompare(b.live)
            );
          });
        });

        console.log(this.userstv);
      },
      err => {
        console.log("account not found", err);
      }
    );*/
  }

  async getUsersInfo() {
    for (let user of this.userstv.users) {
      let tempInfo = await this.infogetidService
        .Streaminfo(user._id)
        .toPromise();
      user.info = tempInfo;
      if (user.info.stream) {
        user.live = "10";
      } else {
        user.live = "0";
      }
    }
  }

  Sortinfo() {
    this.userstv.users = this.userstv.users.sort((b, a) =>
      a.live.localeCompare(b.live)
    );
  }
}
