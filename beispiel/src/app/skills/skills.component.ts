import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../tabelleskills.service";
import {Observable} from "rxjs";
import {Skill} from "../Data";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


skills: Skill[];

id: number= 0 ;

  constructor(public tabelleskills: SkillsService, private http: HttpClient) {
    this.skills=[];

  }

  contactList: any;
  postId: any;

  ngOnInit(): void {
    this.tabelleskills.getAllSkills().subscribe((skills: Skill[])=>this.skills=skills);

    this.tabelleskills.getContacts().subscribe(data => { this.contactList = data; });


    const body = { title: 'Aaaangular PUT Request Example' };
    this.http.put<any>('https://jsonplaceholder.typicode.com/posts/2', body)
      .subscribe(data => this.postId = data.id);


  }

  change(){
    this.id = 5;
  }


technoName: string ="";

  getVal(val: string)
  {
    console.log(val)
    this.technoName = val
  }


  consoleAus(evt: any)
  {
    console.warn(evt)
  }


 updateName: string ="";

    get(val: string)
    {
      console.log(val)
      this.updateName = val
    }

    update()
    {
      this.http.put<any>( this.technoName, this.updateName)
        .subscribe(data => this.id = data.id);
    }







  //  this.tabelleskills.update().subscribe(data=>{console.log(data);})

}
// this.tabelleskills.update();




