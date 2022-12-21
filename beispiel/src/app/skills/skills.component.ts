import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../tabelleskills.service";
import {Observable} from "rxjs";
import {Skill} from "../Data";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  skillId: number = 0;

  technologieName: string = "";

  setErfahrungJahren: string = "";

  setLastUsed: string = "";


  constructor(public tabelleskills: SkillsService, private http: HttpClient) {
    this.skills = [];
  }


  ngOnInit(): void {
    this.tabelleskills.getAllSkills().subscribe((skills: Skill[]) => this.skills = skills);
  }

  update() {
    console.log(this.technologieName, this.setErfahrungJahren, this.setLastUsed);
     const change = {
      name: this.technologieName,
      years: this.setErfahrungJahren,
      lastUsed: this.setLastUsed

    };

    return this.http.put<void>(`https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/${this.skillId}`, change)
      .subscribe()
  }

}



