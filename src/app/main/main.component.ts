import { Component, OnInit , Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() sums: string; 
  ngOnInit() {
    

 

  }

  goserach(){
    this.router.navigate(['/profil', this.sums]);
  }
  



}
