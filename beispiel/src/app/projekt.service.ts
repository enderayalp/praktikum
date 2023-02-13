import { Injectable } from '@angular/core';
import {Projekt} from "./Data";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjektService {
  projects: Projekt[];


  getAllProjekts(): Observable<Projekt[]> {
    return this.http.get<Projekt[]>('https://63e50f338e1ed4ccf6eccc48.mockapi.io');
  }

  constructor(private http: HttpClient) {
    this.projects = []
  }
}
