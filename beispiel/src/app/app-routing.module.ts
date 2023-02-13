import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsDetailsDialogComponent} from "./projects-details-dialog/projects-details-dialog.component";
import {ProjektListeComponent} from "./projekt-liste/projekt-liste.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},

  {path: '', redirectTo: 'HomeComponent', pathMatch: 'full'},

  {path: 'projektListe', component: ProjektListeComponent},

  {path: 'skills', component: SkillsComponent},

  {path: 'projects_dialog', component: ProjectsDetailsDialogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
