import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as lolChamps from "lol-champs";
import { MatchlistService } from "./../../../services/matchlist.service";
import { Matchlist } from "./../../../models/matchlist";
import { MatchesEntity } from "./../../../models/matchlist";
import { MatchService } from "./../../../services/match.service";
import { MmrdivisionPipe } from "../../../pipe/mmrdivision.pipe";
import { BaseService } from "./../../../services/base.service";
import { League } from "src/app/models/league";
import { Account } from "src/app/models/accounts";
import { LeagueService } from "./../../../services/league.service";

@Component({
  selector: "app-best-perchamp",
  templateUrl: "./best-perchamp.component.html",
  styleUrls: ["./best-perchamp.component.css"],
  providers: [MmrdivisionPipe]
})
export class BestPerchampComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private matchlistService: MatchlistService,
    private matchService: MatchService,
    private divispipe: MmrdivisionPipe,
    private baseService: BaseService,
    private leagueService: LeagueService
  ) {}
  champ;
  Matchlists: Matchlist;
  matches: MatchesEntity[] = [];
  account = <Account>{};
  leagues = <League[]>[];
  ngOnInit() {
   this.champ = this.route.snapshot.paramMap.get("champ");
    //console.log(lolChamps.getId(this.champ));
    //  console.log(this.divispipe.transform("Iron","II"));
    // lolChamps.allids().forEach(a=> console.log(a));
    // this.Calculbestchamp();
    this.Fulltraiment("Deenjal");
    console.log(this.divispipe.transform("Iron","II"));
  }
  season;
  index;
  x;
  specialid;
  accountid;

  Fulltraiment(val: string) {
    this.baseService.Getinfo(val).subscribe(
      async (data: Account) => {
        console.log(data);
        this.account = data;
        this.specialid = data.id;
        this.accountid = data.accountId;

        this.GetLeaugue(this.specialid);
      },
      err => {
        if (err.status == 404) {
          console.log("account not found");
        }
      }
    );
  }

  async Calculbestchamp(id: string) {
    this.season = false;
    this.index = 0;

    /*  while (!this.season) {
      this.Matchlists = await this.matchlistService
        .Getmatchlistperq(
          "xkzQ7YpP0_vVy8AmM1jN-iX_AgpxUb0mq5QuK6MoYe81VoL3JUuQfRvJ",
          this.index,
          420
        )
        .toPromise();

        if(this.Matchlists.matches.length < 1)
        { this.season = true;}
      this.Matchlists.matches.forEach(a => {
        if (a.season != 13) {
          this.season = true;
          console.log("season true");
         
        } else {
          this.matches.push(a);
        }
      });

      this.index = this.index + 100;
      console.log(this.matches);
      console.log(this.season);
      
    }*/


    // current matches of this season 
    this.Matchlists = await this.matchlistService
      .Getmatchlistperq(id, 0, 10, 420)
      .toPromise();

    if (this.Matchlists.matches.length < 1) {
      this.season = true;
    }
    this.Matchlists.matches.forEach(a => {
      if (a.season != 13) {
        this.season = true;

      } else {
        this.matches.push(a);
      }
    });

    this.index = this.index + 100;
    console.log(this.matches);
    console.log(this.season);
    await this.fetchmatchinfo();
    this.topmatches(this.specialid );
  }

  async fetchmatchinfo() {
    for (let va of this.matches) {
      va.Matchinfo = await this.matchService.GetMatch(va.gameId).toPromise();
    }
  }

  GetLeaugue(Accountid: string) {
    this.leagueService
      .Getleaugue(Accountid)
      .subscribe((leauguedata: League[]) => {
        this.leagues = leauguedata;
        this.leagues = this.leagues.filter(
          item => item.queueType == "RANKED_SOLO_5x5"
        );
       
        if (this.leagues[0] != undefined) {
         this.Calculbestchamp(this.accountid);
        }

      
      });
  }

  topmatches(id:string) {
    
    let total = 0;
    let accountid = "etLIcquy4PL29un49mXcTkfpLTNvoK-KQq0h6-WoomknoeM";

    lolChamps.allids().forEach(a => {
      let gamesperchampion = this.matches.filter(function(number) {
        return number.champion == a;
      });

      let idchampionplayed = 0;
      let kills = 0;
      let deaths = 0;
      let assists = 0;
      let win = 0;
      let lose = 0;
      let played = 0;

      if (gamesperchampion.length > 1) {
        for (let matchsingle of gamesperchampion) {
          for (let infodata of matchsingle.Matchinfo.participantIdentities) {
            if (
              infodata.player.summonerId ==
             id
            ) {
              let data =
                matchsingle.Matchinfo.participants[infodata.participantId - 1];
              kills += data.stats.kills;
              deaths += data.stats.deaths;
              assists += data.stats.assists;
              
              if (data.stats.win) win++;
              else lose++;
            }
          }
        }

        console.log(
          " champions " +
            lolChamps.getName(a) +
            ",played : " +
            gamesperchampion.length +
            ",times " +
            kills / gamesperchampion.length +
            "/" +
            deaths / gamesperchampion.length +
            "/" +
            assists / gamesperchampion.length +
            "--- played: " 
        );

        console.log(
          "W: " +
            win +
            " / L: " +
            lose +
            "  Winrate : " +
            (win / (win + lose)) * 100
        );
      }
    });
  }

  returnrank() {
    // return iron5 / silver 5 / gold 5
    //if not stop code from working
    console.log(this.divispipe.transform("Iron","II"));

  }
}
