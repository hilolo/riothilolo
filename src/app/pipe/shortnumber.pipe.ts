import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortnumber'
})
export class ShortnumberPipe implements PipeTransform {

  transform(value: number): String {
    return this.Short(value);
  }

  Short(val):String {
    if(val <= 999){
      return '0,'+val + 'k' ;
    }
    // thousands
    else if(val >= 1000 && val <= 999999){
      return Math.floor((val / 1000)) + 'K';
    }

    
  }



}
