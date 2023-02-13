import {Component, OnInit} from '@angular/core';
import {ProjektsService, SkillsService} from "../tabelleskills.service";
import {Projekt} from "../Data";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})

export class ProjektComponent implements OnInit {
  // projekte: Projekt[];

  projects: Projekt[];  //*****************

  private  urlProjekt = 'https://63e50f338e1ed4ccf6eccc48.mockapi.io';   //*****************

  constructor(public tabelle2skills: ProjektsService, private http: HttpClient) {

    this.projects = [];   //*****************
  }


  ngOnInit(): void {

    this.tabelle2skills.getAllProjekts().subscribe((projects: Projekt[]) => this.projects = projects);          //*****************

  }


  title1(title: string) {
    const url = `http://localhost:4200/${encodeURIComponent(title)}`;   //Die Funktion encodeURIComponent konvertiert die Daten in ein URL-kompatibles Format
    const popup = window.open(url, '_blank');                     //
    // @ts-ignore
    popup.document.write(`
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div>
     titel     Werbeplatform<br>
          Eigene Funktion<br>
          Senior Software Engineer<br>
          <br>
      Aufgaben mit Project    Eigene Aufgaben im Projekt<br>
        </div>
      </body>
    </html>
  `);
  }

  title2(title2: string) {
    const url = `http://localhost:4200/${encodeURIComponent(title2)}`;
    const popup = window.open(url, '_blank');
    // @ts-ignore
    popup.document.write(`
    <html>
      <head>
        <title>${title2}</title>
      </head>
      <body>
        <div>
         <b> Auftragstransparenz Komponente </b> <br>
Eigene Funktion<br>
Senior Software Engineer<br>
Eigene Aufgaben im Projekt<br>
Koordinierung der Entwicklung in den Sprints. , Rechtzeitige Eskalation von Impediments die das Sprintziel gefährden. , Analyse der Anforderung und<br>

Kommunikation mit der Fachseite mit den Themen (Impediments, bestehende Lösungen, Machbarkeit, Abhängigkeiten, Lösungsvorschläge). ,<br>
Entwicklung im Frontend und Backend , Unterstützung der Teamkollegen bei fachspezifischen Problemen , Bearbeitung komplexer Aufgaben, Fehleranalyse und Fehlerbeseitigung <br><br>
Eigesetzte Technologien<br>
Springboot , Java , Maven , Git , Rest , OpenApi 3.0 , JPA , Spring Data , JIRA , SCRUM , Nexus , Jenkins , Bitbucket , JUnit , Postman , Spring DI

        </div>
      </body>
    </html>
  `);
  }


  title3(title3: string) {
    const url = `http://localhost:4200/${encodeURIComponent(title3)}`;
    const popup = window.open(url, '_blank');
    // @ts-ignore
    popup.document.write(`
    <html>
      <head>
        <title>${title3}</title>
      </head>
      <body>
        <div>
         <b> MCE (Multi Channel Engine) </b> <br>
Eigene Funktion<br>
Senior Software Engineer<br>
Eigene Aufgaben im Projekt<br>
Backend-Entwicklung in Java und SQL. , Solution Design , Schnittstellen Design , Umwandlung von einzelnen Monoliten in Microservices<br>
Eigesetzte Technologien<br>
Java , Spring Boot , Maven , Mockito , JUnit , Git , Rest , OpenApi , JPA , Spring Data , JIRA , SCRUM , Jenkins , JUnit , SOAP UI , Spring DI
        </div>
      </body>
    </html>
  `);
  }

}


