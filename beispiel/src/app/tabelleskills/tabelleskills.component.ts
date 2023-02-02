import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../tabelleskills.service";
import {Skill, SkillClass} from "../Data";
import {HttpClient} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
  selector: 'app-tabelleskills',
  templateUrl: './tabelleskills.component.html',
  styleUrls: ['./tabelleskills.component.css']
})
export class TabelleskillsComponent implements OnInit {

  skills: Skill[];

  editableSkill?: Skill;

  currentRate?: Skill;

private url = 'https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/';


  constructor(public tabelleskills: SkillsService, private http: HttpClient) {
    this.skills = [];
  }

  ngOnInit(): void {
    this.tabelleskills.getAllSkills().subscribe((skills: Skill[]) => this.skills = skills);
  }


  update() {
  console.log('update');
    const change = {

      name: this.editableSkill?.name,
      years: this.editableSkill?.years,
      lastUsed: this.editableSkill?.lastUsed,
      stars: this.editableSkill?.stars

    };

    return this.http.put<Skill>(`https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/${this.editableSkill?.id}`, change)
      .subscribe((newSkill: Skill) =>
        this.skills = this.skills.map(tableSkill => {
            return tableSkill.id === newSkill.id ? newSkill : tableSkill;     //man kann update machen mit put. man kann mit post daten geschrieben werden
          }
        )
      );
  }


  onEdit(skill: Skill) {
    this.editableSkill = skill;
    return this.currentRate === skill
  }


  cancelEdit() {
    this.editableSkill = undefined;
  }


  deleteSkill(skill) {

    this.http.delete(this.url + '/' + skill.id).subscribe(response => { console.log(response);
    let index = this.skills.indexOf(skill);
    this.skills.splice(index, 1);
    })
  }


  addEmptySkillToSkills() {
    const emptySkill = new SkillClass({
      name: "",
      years: "",
      lastUsed: "",
      currentRate: 0,
      stars: 0
    });

    this.http.post<Skill>('https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill', emptySkill)
      .pipe(
        map(addSkill => {
          this.skills.push(addSkill);
          return this.skills;
        })
      )
      .subscribe();
  }


  isEditable(skill: Skill) {
        return this.editableSkill === skill;
  }

  isCurrent(skill: Skill) {
    return this.currentRate === skill;
  }

  }
