import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PENDING } from '@angular/forms/src/model';
import { ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.less']
})
export class BeginComponent implements OnInit {
  fileUploaded: boolean = false;
  prescription: string;
  prescriptionB64: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  clickForFile(){
    (<HTMLInputElement>document.getElementById("prescription")).click();
  }

  uploadPrescription(event){
    this.fileUploaded = !this.fileUploaded;
    this.convertToBase64(event);
    console.log(this.prescription);
    //console.log((<HTMLInputElement>document.getElementById("prescription")));
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
      self.prescriptionB64 = (reader.result.toString()).substring(23);
      console.log(self.prescriptionB64);
      self.chop(self.prescriptionB64);
      self.prescription = <string>reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }; 
  }

  chop(data){
    this.apiSubmit(data).then((data) => {
      let result = {};
      console.log("ApiSubmit Chop")
      console.log(data);
      let resp = data.toString();
      resp.split('\n').forEach(function(x){
        var arr = x.split(': ');
       
        arr[1] && (result[arr[0].replace(" ", '')] = arr[1]);
      });
      console.log(result);
      console.log("resp");
      console.log(resp);
    });

  }

  apiSubmit(p){
    let reqBody = {"prescriptionImg": p};
    console.log(p);
    let resp = "";
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:9001/submitPrescription', reqBody).subscribe((val) => {
        console.log("POST call successful value returned in body" , val[0]);
        resolve(val[0]);
      });
    });
    

    

   //this.prescriptionB64 = p;
    //console.log(this.prescriptionB64);



    // let request = {
    //   "$class": "org.example.opiodnetwork.Prescription",
    //   "prescriptionId": "1",
    //   "patient": "resource:org.example.opiodnetwork.Patient#" + ,
    //   "doctor": "resource:org.example.opiodnetwork.Doctor#",
    //   "pharmacy": "resource:org.example.opiodnetwork.Pharmacy#",
    //   "drug": "",
    //   "amount": 0,
    //   "refills": 0,
    //   "dateWritten": "",
    //   "dateIssued": "",
    //   "refillable": false,
    //   "doctorRecommendations": "",
    //   "fulfilled": false
    // };

  }


}
