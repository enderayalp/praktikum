import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../tabelleskills.service";
import {Faehigkeit} from "../Data";

@Component({
  selector: 'app-faehigkeit',
  templateUrl: './faehigkeit.component.html',
  styleUrls: ['./faehigkeit.component.css']
})
export class FaehigkeitComponent implements OnInit {


  faehigkeit: Faehigkeit[];

  constructor(private tabelleskills: SkillsService) {
    this.faehigkeit = [];
  }

  ngOnInit(): void {

    this.faehigkeit = this.tabelleskills.getAllFaehigkeiten();
  }


}
