import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MitarbeiterKurzvorstellungComponent} from "./home/mitarbeiter-kurzvorstellung.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsDetailsDialogComponent} from "./projects-details-dialog/projects-details-dialog.component";
import {ProjektListeComponent} from "./projekt-liste/projekt-liste.component";
import {ProjektComponent} from "./projekt/projekt.component";
import {SucheComponent} from "./suche/suche.component";


const routes: Routes = [
  {path: 'home', component: MitarbeiterKurzvorstellungComponent},

  {path: '', redirectTo: 'HomeComponent', pathMatch: 'full'},

  {path: 'projekt', component: ProjektComponent, children: [ { path: 'projekt', component: ProjektComponent }, ]},

  {path: 'skills', component: SkillsComponent},

  {path: 'projects_dialog', component: ProjectsDetailsDialogComponent},

  {path: 'suche', component: SucheComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
