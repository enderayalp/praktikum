export interface Skill {
  name: string;
  years: string;
  lastUsed: string;
  id?: number;
  currentRate: number;
  stars: number;

}

// export class SkillClass implements Skill {
//   name: string;
//   years: string;
//   lastUsed: string;
//   id?: number;
//   currentRate: number;
//   stars: number;
//
//   constructor(skill: Skill) {
//     this.name = skill.name;
//     this.years = skill.years;
//     this.lastUsed = skill.lastUsed;
//     this.id = skill.id;
//     this.currentRate = skill.currentRate;
//     this.stars = skill.stars;
//   }
// }

export interface Faehigkeit {
  title: string;
  title2: string;
}

export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}
