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

  indexd = 0;
  indexfin = 5;

  greet(text: string): string {
    return text.replace(/\s/g, "");
  }

    Getvetsion() {
    this.baseService
      .Getpath()

      .subscribe((aq: version) => {
        this.version = aq.v;
        console.log(this.version);
      });
  }

  GetLeaugue() {
    this.leagueService
      .Getleaugue(this.specialid)
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
      });
  }

  GetAccountInfo() {
    this.baseService
      .Getinfo(this.greet(this.route.snapshot.paramMap.get("summonername")))
      .subscribe(
        (data: Account) => {
          console.log(data);
          this.account = data;
          this.accountid = data.accountId;
          this.specialid = data.id;
          this.spinner.show();
          this.GetLeaugue();
          this.GetMatchlist(this.accountid, 0, 5);
          setTimeout(() => {
            this.spinner.hide();
          }, 5000);
        },
        err => {
          if (err.status == 404) {
            console.log("account not found");
            this.router.navigate(["/404"]);
          }
          if (err.status == 403) {
            console.log("key expired");
            this.router.navigate(["/404"]);
          }
        }
      );
  }

  GetMatchlist(accountid, indexstrat, indexfinish) {
    this.matchlistService
      .Getmatchlist(accountid, indexstrat, indexfinish)
      .subscribe((Matchlistdata: Matchlist) => {
        console.log(Matchlistdata);

        this.Matchlists = Matchlistdata;
        this.GetMatchesInfo();

        this.spinner.hide();
      });
  }

  GetMatchesInfo() {
    this.Matchlists.matches.forEach(va => {
      this.matchService
        .GetMatch(va.gameId)
        .subscribe((Matchinfodata: Match) => {
          va.Matchinfo = Matchinfodata;
        });
    });
  }

  public morematches() {
    this.indexd += 5;
    this.indexfin += 5;
    this.spinner.show();

    if (this.indexd < 30) {
      this.matchlistService
        .Getmatchlist(this.accountid, this.indexd, this.indexfin)
        .subscribe((Matchlistdata: Matchlist) => {
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
        this.spinner.hide();
      }, 5000);
    }
  }
 async ngOnInit() {
    await this.Getvetsion();
   await this.GetAccountInfo();
  }
}
