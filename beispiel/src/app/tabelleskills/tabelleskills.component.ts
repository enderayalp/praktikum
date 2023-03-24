import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../tabelleskills.service";
import {Skill} from "../Data";
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

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
  ngOnInit(): void {  this.tabelleskills.getAllSkills().subscribe((skills: Skill[]) => this.skills = skills);  }
  update() {
    const body = {
      name: this.editableSkill?.name,
      years: this.editableSkill?.years,
      lastUsed: this.editableSkill?.lastUsed,
      stars: this.editableSkill?.stars
    };
    if (this.editableSkill?.id) {
      return this.http.put<Skill>(`https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/${this.editableSkill?.id}`, body)
        .subscribe((newSkill: Skill) =>
          this.skills = this.skills.map(tableSkill => {
              return tableSkill.id === newSkill.id ? newSkill : tableSkill;
            }   )    );
    } else {
      return this.http.post<Skill>('https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill', this.editableSkill)
        .pipe(
          map(savedSkill => {
            this.skills.push(savedSkill);
            this.skills.forEach((skill, index) => {
              if (!skill.id) this.skills.splice(index, 1);
            });
            return this.skills;
          })
        )
        .subscribe();    }  }

  onEdit(skill: Skill) {
    this.editableSkill = skill;
    return this.currentRate === skill
  }

  cancelEdit() {
    this.editableSkill = undefined;
  }

  deleteSkill(skill) {
    if (confirm("Möchten Sie löschen ?")) {
      if (confirm("Sicher ?")) {
        this.http.delete(this.url + '/' + skill.id).subscribe(response => {
          let index = this.skills.indexOf(skill);
          this.skills.splice(index, 1);
        })
      } else {
      }
    }
  }
  addEmptySkillToSkills() {
    const emptySkill = {
      name: "",
      years: "",
      lastUsed: "",
      currentRate: 0,
      stars: 0
    };
    this.skills.push(emptySkill);
    return this.skills;
  }
  isEditable(skill: Skill) {
    return this.editableSkill === skill;
  }
}














