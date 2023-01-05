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

  selectedData: Partial<Skill> = {};

  data: string = "";


  constructor(public tabelleskills: SkillsService, private http: HttpClient) {
    this.skills = [];
  }

  ngOnInit(): void {
    this.tabelleskills.getAllSkills().subscribe((skills: Skill[]) => this.skills = skills);
  }

  update() {

    const change = {

      name: this.selectedData.name,
      years: this.selectedData.years,
      lastUsed: this.selectedData.lastUsed

    };

    return this.http.put<Skill>(`https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/${this.selectedData.id}`, change)
      .subscribe((newSkill: Skill) =>
        this.skills = this.skills.map(tableSkill => {
            return tableSkill.id === newSkill.id ? newSkill : tableSkill;
          }
        )
      );
  }

  onSelected(data: Skill): void {
    this.selectedData = data;
  }


  onEdit(item: any) {
    debugger;
    item.isEdit = true;
  }


}



