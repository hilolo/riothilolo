import { Component, OnInit,Input } from '@angular/core';
import { MatchesEntity } from "src/app/models/matchlist";
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  @Input()
  matches : MatchesEntity;

  @Input()
  specialid : String;

  @Input()
  version : String;

  constructor() { }

  ngOnInit() {
    
  }

}
