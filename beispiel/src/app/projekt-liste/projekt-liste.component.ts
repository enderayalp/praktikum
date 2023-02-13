import {Component, OnInit} from '@angular/core';
import {ProjektsService, SkillsService} from "../tabelleskills.service";
import {Projekt} from "../Data";
import {ProjektComponent} from "../projekt/projekt.component";

@Component({
  selector: 'app-projekt-liste',
  templateUrl: './projekt-liste.component.html',
  styleUrls: ['./projekt-liste.component.css']
})
export class ProjektListeComponent implements OnInit {

  constructor() {


  }


  ngOnInit(): void {

  }

}
