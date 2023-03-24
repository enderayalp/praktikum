export interface Skill {
  name: string;
  years: string;
  lastUsed: string;
  id?: number;
  currentRate: number;
  stars: number;

}

export interface Projekt {
  title: string;
  rolle: string;
  beschreibung: string;
  Zeitraum: string;
  verwendeteTechnologien: string;
  EigeneTaetigkeitenImProjekt: string;
  BesondereHerausforderung: string;
  id?: number;

}

export interface Mitarbeiter {
  id?: number;
title: string;
}
