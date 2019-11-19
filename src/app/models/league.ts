export class League {

    queueType: string;
    summonerName: string;
    hotStreak : boolean ;
    wins : number;
    losses: number;
    rank: string;
    leagueId:string;
    tier: string;
    summonerId: string;
    leaguePoints: number;
    kda: number;
    constructor( ) {
        this.kda= this.wins/(this.wins+this.losses);
    }

}
