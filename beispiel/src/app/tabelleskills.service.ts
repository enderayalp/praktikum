import {Injectable} from '@angular/core';
import {Projekt, Skill} from "./Data";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


function Update(ref: any, param2: { id: any }) {}

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

export class ProjektsService {         //*****************
  projects: Projekt[];


  getAllProjekts(): Observable<Projekt[]>{
    return this.http.get<Projekt[]>('https://63e50f338e1ed4ccf6eccc48.mockapi.io');   //*****************
  }

  constructor(private http: HttpClient) {
    this.projects = []
  }
}
