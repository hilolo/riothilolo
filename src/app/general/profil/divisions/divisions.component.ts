import { Component, OnInit, Input } from '@angular/core';
import { League } from "src/app/models/league";

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {
  @Input()
  league : League;

  constructor() { }

  ngOnInit() {
  }

}
