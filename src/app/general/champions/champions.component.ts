import { Component, OnInit, Input } from "@angular/core";
import * as lolChamps from "lol-champs";
import { version } from "src/app/models/version";
import { BaseService } from "./../../services/base.service";

@Component({
  selector: "app-champions",
  templateUrl: "./champions.component.html",
  styleUrls: ["./champions.component.css"]
})
export class ChampionsComponent implements OnInit {
  Champions: any;
  searchChampions: any;
  dqq: any;
  @Input() searchtext: string;
  @Input() theCheckbox = false;
  filter = false;
  version;
  constructor(private baseService: BaseService) {}

  Getvetsion() {
    this.baseService.Getpath().subscribe((aq: version) => {
      this.version = aq.v;
    });
  }

  Mostchamps(ev) {
    this.searchtext = null;
    if (this.theCheckbox) {
      this.Champions = lolChamps.all().sort();
     
    } else {
      this.Champions = lolChamps.alleasychamps();
      console.log(lolChamps.alleasychamps());
    }
  }

  Searchchamps() {
    this.Champions = this.searchChampions = lolChamps
      .all()
      .filter(champ =>
        champ.toLowerCase().includes(this.searchtext.toLowerCase())
      )
      .sort();
  }

  checkValue(event: any) {
    console.log(event);
  }

  Listidchampuobs() {
    this.dqq = lolChamps.allids();
    console.log(this.dqq);
  }
  ngOnInit() {
    this.Getvetsion();
    this.Champions = lolChamps.all().sort();
    this.searchChampions = lolChamps.all().sort();
  }
}
