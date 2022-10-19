import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'neuform',
  templateUrl: './neuform.component.html',
  styleUrls: ['./neuform.component.css']
})
export class NeuformComponent implements OnInit {

@Input()

  formDataNeu = {
    vorname: '',
    nachname: '',
    addresse: '',
    email: '',
    password: ''
  }






  constructor() { }


  ngOnInit(): void {
  }

}
