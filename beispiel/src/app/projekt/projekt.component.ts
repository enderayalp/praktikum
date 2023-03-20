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
  projektListe: Projekt[];

  project: Projekt;
  viewState: Viewstate = 'list';

  showList(){
    this.viewState = 'list';
  }

  showDetails(project: Projekt){
    this.project = project;
    this.viewState = 'details';
  }
  private url = 'https://63e50f338e1ed4ccf6eccc48.mockapi.io/api/Faehigkeiten';

  constructor(private projektService: ProjektService, private http: HttpClient) {

    this.projects = [];
  }

  ngOnInit(): void {
  }

  getProjektListe() {

console.log("projekt.component");

  }
}
