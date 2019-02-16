import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less']
})
export class ReportComponent implements OnInit {
  reqBody = {
    victimName: '',
    victimLocation: '',
    victimAge: '',
    victimSex: ''
  }

  constructor() { }

  ngOnInit() {

  }


}
