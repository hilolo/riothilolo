import { Pipe, PipeTransform } from '@angular/core';
import dataq from '../data/queues.json';

@Pipe({
  name: 'quenne'
})
export class QuennePipe implements PipeTransform {

  transform(val: number): string {

    var matched = Object.keys(dataq).filter(function (key) {
      
      return dataq[key].queueId == val;
   
  }).toString();
    return dataq[matched].description;
  }

}
