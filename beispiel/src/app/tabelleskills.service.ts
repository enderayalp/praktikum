import {Injectable} from '@angular/core';
import {Skill} from "./Data";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[];

  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('https://6388bc57a4bb27a7f79036af.mockapi.io/lebenslauf/skill');
  }

  constructor(private http: HttpClient) {
    this.skills = []
  }

}
