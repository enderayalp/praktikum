import {Component, OnInit} from '@angular/core';
import {Projekt} from "../Data";
import {HttpClient} from "@angular/common/http";
import {ProjektService} from "../projekt.service";


@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})

export class ProjektComponent implements OnInit {

  projects: Projekt[];

  constructor(private projektService: ProjektService, private http: HttpClient) {

    this.projects = [];
  }

  ngOnInit(): void {

    this.projektService.getAllProjekts().subscribe((projects: Projekt[]) => this.projects = projects);
  }

}

