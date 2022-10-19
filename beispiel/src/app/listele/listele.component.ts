import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'listele-component',
  templateUrl: './listele.component.html',
  styleUrls: ['./listele.component.css']
})
export class ListeleComponent implements OnInit {

@Input ()

formListele ={
marke: '',
model: '',
erstzulassung: '',
kilometer: '',
kraftstoffart:'',
fahrzeugtyp:'',

}

  constructor() { }

  ngOnInit(): void {
  }

}
