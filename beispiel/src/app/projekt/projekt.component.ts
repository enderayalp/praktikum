import {Component, OnInit, Output} from '@angular/core';
import {Projekt} from "../Data";
import {HttpClient} from "@angular/common/http";
import {ProjektService} from "../projekt.service";


type Viewstate = 'list' | 'details'

@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})

export class ProjektComponent implements OnInit {

  projects: Projekt[];


  project: Projekt;
  viewState: Viewstate = 'list';

  showList(){
    this.viewState = 'list';
  }

  showDetails(project: Projekt){
    this.project = project;
    this.viewState = 'details';
  }

  constructor() {

    this.projects = [];
  }

  ngOnInit(): void {
  }

}
