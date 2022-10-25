import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mobile} from "../mobile/mobile.component";

@Component({
  selector: 'neuform-component',
  templateUrl: './neuform.component.html',
  styleUrls: ['./neuform.component.css']
})
export class NeuformComponent implements OnInit {

@Input()
mobile: Mobile={
model:"",
marke:"",
kilometer:"",
}

@Output() autoUpdateEvent = new EventEmitter<Mobile>;

mobile2: Mobile={
model:"",
marke:"",
kilometer:"",
}

  constructor() { }

changeAuto(mobile: Mobile){
    this.mobile2.marke = mobile.marke;
    this.autoUpdateEvent.emit(mobile);

  }

show: boolean= false;

click() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
