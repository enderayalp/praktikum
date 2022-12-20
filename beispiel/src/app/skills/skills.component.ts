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


  constructor(public tabelleskills: SkillsService, private http: HttpClient) {
    this.skills = [];
  }


  ngOnInit(): void {
    this.tabelleskills.getAllSkills().subscribe((skills: Skill[]) => this.skills = skills);
  }




  getVal(val: string) {
    console.log(val)
    this.technologieName = val
  }

  consoleAus(evt: any) {
    console.warn(evt)
  }

  update() {
    console.log(this.technologieName);
    const change = {
      name: this.technologieName,
    };

    return this.http.put<void>(`https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/${this.skillId}`, change)
      .subscribe()
  }

}



