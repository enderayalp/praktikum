import {Injectable} from '@angular/core';
import {Skill, UserHome} from "./Data";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  userhome: UserHome[];

  getAllUser(): Observable<UserHome[]> {
    return this.http.get<UserHome[]>('https://6409d14f6ecd4f9e18bc17e6.mockapi.io/api/UserHome');
  }

  constructor(private http: HttpClient) {
    this.userhome = []
  }

}





