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
  constructor() {
  }

  ngOnInit(): void {
  }

}



