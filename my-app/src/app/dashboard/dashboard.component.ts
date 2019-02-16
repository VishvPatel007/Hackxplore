import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click(type){
    if (type === 'report'){
      (<HTMLInputElement>document.getElementById("report")).click();
    } else {
      (<HTMLInputElement>document.getElementById("map")).click();
    }
  }

}
