import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../tabelleskills.service";
import {Skill} from "../Data";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  selectedSkill: Partial<Skill> = {};


  constructor(public tabelleskills: SkillsService, private http: HttpClient) {
    this.skills = [];
  }

  ngOnInit(): void {
    this.tabelleskills.getAllSkills().subscribe((skills: Skill[]) => this.skills = skills);
  }

  update() {
    console.log("update skill ")
    const change = {

      name: this.selectedSkill.name,
      years: this.selectedSkill.years,
      lastUsed: this.selectedSkill.lastUsed

    };

    return this.http.put<Skill>(`https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/${this.selectedSkill.id}`, change)
      .subscribe((newSkill: Skill) =>
        this.skills = this.skills.map(tableSkill => {
            return tableSkill.id === newSkill.id ? newSkill : tableSkill;
          }
        )
      );
  }

  onSelected(skill: Skill): void {
    console.log("clicked skill "+skill.id)
    this.selectedSkill = skill;
  }


  onEdit(item: any) {
    item.isEdit = true;
  }


}



