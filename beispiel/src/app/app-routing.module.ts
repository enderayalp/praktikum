import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from "./skills/skills.component";
import {FaehigkeitComponent} from "./faehigkeit/faehigkeit.component";

// @ts-ignore
const routes: Routes = [
  { path:'home',  component:HomeComponent  },

  { path:'',  redirectTo:'HomeComponent', pathMatch: 'full'  },

  { path:'faehigkeit',  component:FaehigkeitComponent  },

  { path:'skills',  component:SkillsComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
