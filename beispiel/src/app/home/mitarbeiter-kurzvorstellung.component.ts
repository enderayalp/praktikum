import {Component, Input, OnInit} from '@angular/core';
import {Skill, Mitarbeiter} from "../Data";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {MitarbeiterService} from "../mitarbeiter.service";

@Component({
  selector: 'app-home',
  templateUrl: './mitarbeiter-kurzvorstellung.component.html',
  styleUrls: ['./mitarbeiter-kurzvorstellung.component.css']
})
export class MitarbeiterKurzvorstellungComponent implements OnInit {
  editablemitarbeiter?: Mitarbeiter;
  mitarbeiter: Mitarbeiter[];
  private url = 'https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome';
  disabledBox=true;
  constructor(public mitarbeiterService: MitarbeiterService, private http: HttpClient) {
    this.mitarbeiter = [];
  }
  ngOnInit(): void {
    this.mitarbeiterService.getAllUser().subscribe((mitarbeiter: Mitarbeiter[]) => this.mitarbeiter = mitarbeiter);
  }
  update() {
    const change = {
      title: this.editablemitarbeiter?.title
    };
    if (this.editablemitarbeiter?.id) {
      return this.http.put<Mitarbeiter>(`https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome/${this.editablemitarbeiter?.id}`, change)
        .subscribe((newSkill: Mitarbeiter) =>
          this.mitarbeiter = this.mitarbeiter.map(tableSkill => {
              return tableSkill.id === newSkill.id ? newSkill : tableSkill;
            }
          )
        );
    } else {
      return this.http.post<Mitarbeiter>('https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome', this.editablemitarbeiter)
        .pipe(
          map(savedSkill => {
            this.mitarbeiter.push(savedSkill);
            this.mitarbeiter.forEach((skill, index) => {
              if (!skill.id) this.mitarbeiter.splice(index, 1);
            });
            return this.mitarbeiter;
          })  )
        .subscribe();   }  }

  onEdit(skill: Mitarbeiter) {
    this.editablemitarbeiter = skill;
    this.disabledBox=false;
  }

  cancelEdit() {
    this.editablemitarbeiter = undefined;
  }

  deleteSkill(skill) {
    if (confirm("Möchten Sie löschen ?")) {
      if (confirm("Sicher ?")) {
        this.http.delete(this.url + '/' + skill.id).subscribe(response => {
          let index = this.mitarbeiter.indexOf(skill);
          this.mitarbeiter.splice(index, 1);
        })
      } else {
      }
    }
  }
  isEditable(skill: Mitarbeiter) {
    return this.editablemitarbeiter === skill;
  }
}














