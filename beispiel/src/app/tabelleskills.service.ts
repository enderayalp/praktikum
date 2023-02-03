import {Injectable} from '@angular/core';
import {Faehigkeit, Skill} from "./Data";
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

function Update(ref: any, param2: { id: any }) {

}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[];

  faehigkeit: Faehigkeit[];


  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill');
  }

  getAllFaehigkeiten(): Faehigkeit[] {
    return this.faehigkeit;

  }


  constructor(private http: HttpClient) {
    this.skills = []


    this.faehigkeit = [{
      "title": "There are many variations of passages of Lorem Ipsum available",
      "title2": "Das ist ein Test"
    }
    ]
  }

  update() {
    const change = {
      name: 'ich bin id 2',
      years: '77',
      lastUsed: '99',
    };
    return this.http.put('https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill/2', change)
  }


}
