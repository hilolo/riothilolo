import { Pipe, PipeTransform } from '@angular/core';
import {Summoner} from './../models/summoner';
import * as data from './../../assets/champion.json';

@Pipe({
  name: 'summonerSpell'
})

export class SummonerSpellPipe implements PipeTransform {
  
  summs:Summoner[] = [
    {key: 21, summoner: 'SummonerBarrier'},
    {key: 1, summoner: 'SummonerBoost'},
    {key: 14, summoner: 'SummonerDot'},
    {key: 3, summoner: 'SummonerExhaust'},
    {key: 4, summoner: 'SummonerFlash'},
    {key: 6, summoner: 'SummonerHaste'},
    {key: 52, summoner: 'SummonerOdysseyFlash'},
    {key: 50, summoner: 'SummonerOdysseyRevive'},
    {key: 31, summoner: 'SummonerPoroRecall'},
    {key: 11, summoner: 'SummonerSmite'},
    {key: 12, summoner: 'SummonerTeleport'},
    {key: 7, summoner: 'SummonerHeal'},
    {key: 32, summoner: 'SummonerSnowball'},
    {key: 13, summoner: 'SummonerMana'}
 
]


  transform(value: number): string {
    let item1 = this.summs.find(i => i.key === value);
    return item1.summoner;
  }

}
