import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Projekt} from "../Data";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ProjektService} from "../projekt.service";



@Component({
  selector: 'app-projects-details-dialog',
  templateUrl: './projects-details-dialog.component.html',
  styleUrls: ['./projects-details-dialog.component.css']
})
export class ProjectsDetailsDialogComponent implements OnInit{    //implements OnInit wurde hinzugefügt
  @Input() project: Projekt;
  @Output() showListEvent = new EventEmitter<any>();


  // getRating(num: number){
  //   return new Array(num);
  // }
  //
  showProjectList(){
    this.showListEvent.emit();
  }



  editableProjekt?: Projekt;

  projekt: Projekt[];

  private url = 'https://63e50f338e1ed4ccf6eccc48.mockapi.io/api/Faehigkeiten';

  disabledBox=true;

  constructor(public tabelleskills: ProjektService, private http: HttpClient) {
    this.projekt = [];

  }

  ngOnInit(): void {
    this.tabelleskills.getAllProjekts().subscribe((projekt: Projekt[]) => this.projekt = projekt);
  }

  update() {
    const change = {
      title: this.editableProjekt?.title,
      rolle: this.editableProjekt?.rolle,
      beschreibung: this.editableProjekt?.beschreibung,
      Zeitraum: this.editableProjekt?.Zeitraum,
      verwendeteTechnologien: this.editableProjekt?.verwendeteTechnologien,
      EigeneTaetigkeitenImProjekt: this.editableProjekt?.EigeneTaetigkeitenImProjekt,
      BesondereHerausforderung: this.editableProjekt?.BesondereHerausforderung,
    };

    if (this.editableProjekt?.id) { //falsy / truthy
      return this.http.put<Projekt>(`https://63e50f338e1ed4ccf6eccc48.mockapi.io/api/Faehigkeiten/${this.editableProjekt?.id}`, change)
        .subscribe((newSkill: Projekt) =>
          this.projekt = this.projekt.map(tableSkill => {
              return tableSkill.id === newSkill.id ? newSkill : tableSkill;     //man kann update machen mit put. man kann mit post daten geschrieben werden
            }
          )
        );

    } else {
      return this.http.post<Projekt>('https://63e50f338e1ed4ccf6eccc48.mockapi.io/api/Faehigkeiten', this.editableProjekt)
        .pipe(
          map(savedSkill => {
            this.projekt.push(savedSkill);
            this.projekt.forEach((skill, index) => {
              if (!skill.id) this.projekt.splice(index, 1);
            });
            return this.projekt;
          })
        )
        .subscribe();
    }
  }

  onEdit(skill: Projekt) {
    this.editableProjekt = skill;
    this.disabledBox=false
  }

  cancelEdit() {
    this.editableProjekt = undefined;
  }

  deleteSkill(skill) {
    if (confirm("Möchten Sie löschen ?")) {
      if (confirm("Sicher ?")) {
        this.http.delete(this.url + '/' + skill.id).subscribe(response => {
          console.log(response);
          let index = this.projekt.indexOf(skill);
          this.projekt.splice(index, 1);
        })
      } else {
      }
    }
  }


  addEmptySkillToSkills() {
    const emptySkill = {
      title: "",
      rolle: "",
      beschreibung: "",
      Zeitraum: "",
      verwendeteTechnologien: "",
      EigeneTaetigkeitenImProjekt: "",
      BesondereHerausforderung: ""
    };

    this.projekt.push(emptySkill);
    return this.projekt;
  }

  isEditable(skill: Projekt) {
    return this.editableProjekt === skill;
  }
}

