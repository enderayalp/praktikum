import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Projekt} from "../Data";

@Component({
  selector: 'app-projekt-liste',
  templateUrl: './projekt-liste.component.html',
  styleUrls: ['./projekt-liste.component.css']
})
export class ProjektListeComponent implements OnInit {

  projects: Projekt[];  //********************
  @Output() showDetailsEvent = new EventEmitter<Projekt>();  //********************

  constructor() { }


  ngOnInit(): void {
    this.projects = [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make...',
        rolle: 'is simply dummy text of the printing and typesetting industry',
        beschreibung: ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        Zeitraum: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        verwendeteTechnologien: 'It has survived not only five centuries, but also the leap into electronic typesetting,',
        EigeneTaetigkeitenImProjekt:'eeeeee3' ,
        BesondereHerausforderung: 'eeeeee4'
      },
      {
        title: 'A ad aperiam commodi ducimus eius, facere harum inventore mollitia nulla provident quaerat quibusdam quis quisquam repellendus rerum totam ut veniam vitae.',
        rolle: 'serhat2',
        beschreibung: 'serhat3',
        Zeitraum: 'ssssss1',
        verwendeteTechnologien: 'ssssss2',
        EigeneTaetigkeitenImProjekt:'ssssss3' ,
        BesondereHerausforderung: 'ssssss4'
      },
      {
        title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        rolle: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
        beschreibung: 'serhat3',
        Zeitraum: 'and a search for \'lorem ipsum\' will uncover many web sites still in their infancy',
        verwendeteTechnologien: 'Various versions have evolved over the years, sometimes by accident',
        EigeneTaetigkeitenImProjekt:'sometimes on purpose (injected humour and the like).' ,
        BesondereHerausforderung: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text'
      }
    ]

  }

  showDetails(project: Projekt){          //********************
    this.showDetailsEvent.emit(project);
  }
}
