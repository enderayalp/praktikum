import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'bar-component',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})


export class BarComponent implements OnInit {

  text: string = '';     //   text: string = 'ich komme aus der componente';

  formDataBar = {
    vorname: '',
    nachname: '',
    addresse: '',
    email: '',
    password: ''
  }

  @Input()     // myurl: string;

  show: boolean = false;

//   constructor() {
//     this.myurl = ''
//   }

  ngOnInit(): void {}
//   click(){
//   this.button =
//   }

  click() {
    this.show = !this.show;
  }
}
