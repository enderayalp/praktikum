import { Component, OnInit } from '@angular/core';


export interface Auto {
  marke: string,
  model: string,
  erstzulassung: string,
  kilometer: string,
  kraftstoffart:string,
  fahrzeugtyp:string,
}

@Component({
  selector: 'auto-component',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

formAuto: Auto ={
marke: '',
model: '',
erstzulassung: '',
kilometer: '',
kraftstoffart:'',
fahrzeugtyp:'',
}

show: boolean= false;

changeFormAuto(auto: Auto){
this.formAuto = auto;
/*  this.formAuto.marke = auto.marke;
  this.formAuto.model = auto.model;*/
}

click() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void { }

}
