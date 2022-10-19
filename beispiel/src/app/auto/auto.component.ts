import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-component',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

formAuto ={
marke: '',
model: '',
erstzulassung: '',
kilometer: '',
kraftstoffart:'',
fahrzeugtyp:'',

}

show: boolean= false;

click() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void { }

}
