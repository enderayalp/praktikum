import { Component, OnInit } from '@angular/core';

export interface Mobile {
  marke: string,
  model: string,
  kilometer: string,
}

@Component({
  selector: 'mobile-component',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

formMobile: Mobile ={
marke: '',
model: '',
kilometer: '',
}

show: boolean= false;

changeFormAuto(mobile: Mobile){
this.formMobile = mobile;
 this.formMobile.marke = mobile.marke;
  this.formMobile.model = mobile.model;
}

click() {
    this.show = !this.show;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
