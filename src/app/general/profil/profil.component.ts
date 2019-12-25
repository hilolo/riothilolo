import { Component, OnInit, getDebugNode } from "@angular/core";
import { BaseService } from "./../../services/base.service";
import { LeagueService } from "./../../services/league.service";
import { MatchlistService } from "./../../services/matchlist.service";
import { MatchService } from "./../../services/match.service";
import { Account } from "src/app/models/accounts";
import { League } from "src/app/models/league";
import { Matchlist } from "src/app/models/matchlist";
import { Match } from "src/app/models/match";
import { version } from "src/app/models/version";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"]
})
export class ProfilComponent implements OnInit {
  account = <Account>{};
  leagues = <League[]>[];
  Matchlists = <Matchlist>{};
  Match = <Match>{};
  timeLeft: number = 60;
  version: String = "";
  accountid: string;
  specialid: string;

  constructor(
    private baseService: BaseService,
    private leagueService: LeagueService,
    private matchlistService: MatchlistService,
    private matchService: MatchService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let namesumm = this.route.snapshot.paramMap
      .get("summonername")
      .replace(/\s/g, "");

    this.spinner.show();
    this.baseService
      .Getpath()

      .subscribe((aq: version) => {
        this.version = aq.v;
        console.log(this.version);
      });

    this.baseService.Getinfo(namesumm).subscribe(
      (data: Account) => {
        console.log(data);
        this.account = data;
        this.accountid = data.accountId;
        this.specialid = data.id;
        this.leagueService
          .Getleaugue(data.id)
          .subscribe((leauguedata: League[]) => {
            this.leagues = leauguedata;
            this.leagues = this.leagues.filter(
              item =>
                item.queueType !== "RANKED_TFT" &&
                item.queueType !== "RANKED_FLEX_TT"
            );

            this.leagues = this.leagues.sort((b, a) =>
              a.queueType.localeCompare(b.queueType)
            );

            //    console.log("account id " + JSON.stringify(this.leagues) );
          });

        this.matchlistService
          .Getmatchlist(this.accountid, 0, 5)
          .subscribe((Matchlistdata: Matchlist) => {
            console.log(Matchlistdata);

            this.Matchlists = Matchlistdata;

            this.Matchlists.matches.forEach(va => {
              this.matchService
                .GetMatch(va.gameId)
                .subscribe((Matchinfodata: Match) => {
                  va.Matchinfo = Matchinfodata;
                });
            });

            this.spinner.hide();
          });

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);

        //this.Matchinfo(4295648398);
      },
      err => {
        if (err.status == 404) {
          console.log("account not found");
          this.router.navigate(["/404"]);
        }
        if (err.status == 403) {
          console.log("key expired");
        }
      }
    );

    /*
show data in json
  console.log("leaugue id " + JSON.stringify(this.league) );
  /*


    /
    
    multiple matches
    for (var k in Matchlistdata.matches) {
          this.Matchlists.matches.push(Matchlistdata.matches[k]);
          }*/

    /*
 console.log(this.account);
 undefined cause not load yet from the api

   */
  }

  indexd = 0;
  indexfin = 5;
  public morematches() {
    this.indexd += 5;
    this.indexfin += 5;
    this.spinner.show();

    if (this.indexd < 30) {
      this.matchlistService
        .Getmatchlist(this.accountid, this.indexd, this.indexfin)
        .subscribe((Matchlistdata: Matchlist) => {
          //  console.log(  Matchlistdata);

          Matchlistdata.matches.forEach(x => {
            this.Matchlists.matches.push(x);
          });

          this.Matchlists.matches.forEach(va => {
            this.matchService
              .GetMatch(va.gameId)
              .subscribe((Matchinfodata: Match) => {
                va.Matchinfo = Matchinfodata;
              });
          });

          this.spinner.hide();
        });

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
    }
  }
}
