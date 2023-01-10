import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../tabelleskills.service";
import {Skill} from "../Data";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tabelleskills',
  templateUrl: './tabelleskills.component.html',
  styleUrls: ['./tabelleskills.component.css']
})
export class TabelleskillsComponent implements OnInit {

  skills: Skill[];

  editableSkill?: Skill;

  currentRate: number = 3;


  constructor(public tabelleskills: SkillsService, private http: HttpClient) {
    this.skills = [];
  }

  ngOnInit(): void {
    this.tabelleskills.getAllSkills().subscribe((skills: Skill[]) => this.skills = skills);
  }

  update() {
    console.log("update skill ")
    const change = {

      name: this.editableSkill?.name,
      years: this.editableSkill?.years,
      lastUsed: this.editableSkill?.lastUsed

    };

    return this.http.put<Skill>(`https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/${this.editableSkill?.id}`, change)
      .subscribe((newSkill: Skill) =>
        this.skills = this.skills.map(tableSkill => {
            return tableSkill.id === newSkill.id ? newSkill : tableSkill;
          }
        )
      );
  }

  onEdit(skill: Skill) {
    this.editableSkill = skill;
  }

  cancelEdit() {
    this.editableSkill = undefined;
  }


  isEditable(skill: Skill) {
        return this.editableSkill === skill;
  }

}
