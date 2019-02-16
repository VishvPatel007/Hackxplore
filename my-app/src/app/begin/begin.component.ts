import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.less']
})
export class BeginComponent implements OnInit {
  fileUploaded: boolean = false;
  prescription: string;

  constructor() { }

  ngOnInit() {
  }

  clickForFile(){
    (<HTMLInputElement>document.getElementById("prescription")).click();
  }

  uploadPrescription(event){
    this.fileUploaded = !this.fileUploaded;
    this.convertToBase64(event);
    console.log((<HTMLInputElement>document.getElementById("prescription")));
    if ((<HTMLInputElement>document.getElementById("prescription")).value !== null) {
      this.prescription = (<HTMLInputElement>document.getElementById("prescription")).value;
    }
  }

  convertToBase64(event) {
    let self = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      self.prescription = <string>reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
