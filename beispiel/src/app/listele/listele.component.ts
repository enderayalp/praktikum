import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Auto} from "../auto/auto.component";

@Component({
  selector: 'listele-component',
  templateUrl: './listele.component.html',
  styleUrls: ['./listele.component.css']
})
export class ListeleComponent implements OnInit {
@Input () auto: Auto ={
marke: '',
model: '',
erstzulassung: '',
kilometer: '',
kraftstoffart:'',
fahrzeugtyp:'',
}

@Output() autoUpdateEvent = new EventEmitter<Auto>;

  auto2: Auto ={
    marke: '',
    model: '',
    erstzulassung: '',
    kilometer: '',
    kraftstoffart:'',
    fahrzeugtyp:'',
  }


  constructor() { }

  changeAuto(auto: Auto){
    this.auto2.marke = auto.marke;
    this.autoUpdateEvent.emit(auto);

  }

  ngOnInit(): void {
  }

}
