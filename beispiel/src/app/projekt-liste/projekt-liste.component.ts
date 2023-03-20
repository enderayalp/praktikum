import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Projekt} from "../Data";

@Component({
  selector: 'app-projekt-liste',
  templateUrl: './projekt-liste.component.html',
  styleUrls: ['./projekt-liste.component.css']
})
export class ProjektListeComponent implements OnInit {

  projects: Projekt[];
  @Output() showDetailsEvent = new EventEmitter<Projekt>();

  constructor() { }

  ngOnInit(): void {
    this.projects = [
    ]

  }

  showDetails(project: Projekt){
    this.showDetailsEvent.emit(project);
  }
}
