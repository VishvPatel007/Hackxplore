import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.less']
})
export class ConfirmationComponent implements OnInit {

  //Change this up if you wanna
  reqBody = {
    doctorName: 'Dev Patel',
    doctorAddress: '742 Spadina Ave, Toronto, ON M5S 2J2',
    patientName: 'Mindy Doe',
    patientAddress: '8 Adelaide St W, Toronto, ON M5H 0A9',
    patientAge: '21',
    patientSex: 'F',
    datePrescribed: '17-02-2019',
    drugName: 'Codeine',
    drugAmount: '30mg',
    refills: 'None'
  }

  constructor() { }

  ngOnInit() {
  }

}
