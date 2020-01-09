import { Pipe, PipeTransform } from '@angular/core';
import * as lolChamps from 'lol-champs';


@Pipe({
  name: 'championname'
})
export class ChampionnamePipe implements PipeTransform {

  transform(value: number): String {
    return lolChamps.getName(value);
  }

}
