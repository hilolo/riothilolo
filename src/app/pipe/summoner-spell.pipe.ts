import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summonerSpell'
})
export class SummonerSpellPipe implements PipeTransform {

  transform(val : number) : String {
    return val +"hi";
 }

}
