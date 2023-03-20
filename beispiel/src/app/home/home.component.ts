import {Component, Input, OnInit} from '@angular/core';
// import { HomeService } from '../home.service';
import {Skill, UserHome} from "../Data";
// import {HomeService} from "../tabelleskills.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  editableHome?: UserHome;

  userhome: UserHome[];

  private url = 'https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome';

  disabledBox=true;

  constructor(public homeService: HomeService, private http: HttpClient) {
    this.userhome = [];
  }

  ngOnInit(): void {
    this.homeService.getAllUser().subscribe((userhome: UserHome[]) => this.userhome = userhome);
  }

  update() {
    const change = {
      title: this.editableHome?.title
    };

    if (this.editableHome?.id) { //falsy / truthy
      return this.http.put<UserHome>(`https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome/${this.editableHome?.id}`, change)
        .subscribe((newSkill: UserHome) =>
          this.userhome = this.userhome.map(tableSkill => {
              return tableSkill.id === newSkill.id ? newSkill : tableSkill;     //man kann update machen mit put. man kann mit post daten geschrieben werden
            }
          )
        );

    } else {
      return this.http.post<UserHome>('https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome', this.editableHome)
        .pipe(
          map(savedSkill => {
            this.userhome.push(savedSkill);
            this.userhome.forEach((skill, index) => {
              if (!skill.id) this.userhome.splice(index, 1);
            });
            return this.userhome;
          })
        )
        .subscribe();
    }
  }

  onEdit(skill: UserHome) {

    this.editableHome = skill;
    this.disabledBox=false;
    // return this.currentRate === skill
  }

  cancelEdit() {
    this.editableHome = undefined;
  }

  deleteSkill(skill) {
    if (confirm("Möchten Sie löschen ?")) {
      if (confirm("Sicher ?")) {
        this.http.delete(this.url + '/' + skill.id).subscribe(response => {
          console.log(response);
          let index = this.userhome.indexOf(skill);
          this.userhome.splice(index, 1);
        })
      } else {
      }
    }
  }


  isEditable(skill: UserHome) {
    return this.editableHome === skill;
  }



}


