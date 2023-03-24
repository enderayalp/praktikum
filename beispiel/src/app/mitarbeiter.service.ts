import {Injectable} from '@angular/core';
import {Skill, Mitarbeiter} from "./Data";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MitarbeiterService {

  mitarbeiter: Mitarbeiter[];

  getAllUser(): Observable<Mitarbeiter[]> {
    return this.http.get<Mitarbeiter[]>('https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome');
  }

  constructor(private http: HttpClient) {
    this.mitarbeiter = []
  }

}





