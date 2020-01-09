import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mmrdivision"
})
export class MmrdivisionPipe implements PipeTransform {
  transform(tier: string,rank : string): number {
    var t1: number;
    switch (tier) {
      case "Iron": {
        t1 = 600;
        break;
      }
      case "Bronze": {
        t1 = 800;
        break;
      }
      case "Silver": {
        t1 = 1000;
        break;
      }
      case "Gold": {
        t1 = 1200;
        break;
      }
      case "Diamond": {
        t1 = 1400;
        break;
      }
      case "Master": {
        t1 = 1600;
        break;
      }

      case "Grandmaster": {
        t1 = 1800;
        break;
      }

      case "Challenger": {
        t1 = 2000;
        break;
      }
    }

    var r1: number;
    switch (rank) {
      case "I": {
        r1 = 50;
        break;
      }
      case "II": {
        r1 = 100;
        break;
      }
      case "III": {
        r1 = 150;
        break;
      }
      case "VI": {
        r1 = 200;
        break;
      }
      
    }
    return t1+r1;
  }
}
