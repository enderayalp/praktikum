import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MitarbeiterKurzvorstellungComponent} from "./home/mitarbeiter-kurzvorstellung.component";
import {HttpClientModule} from "@angular/common/http";
import {SkillsComponent} from './skills/skills.component';
import {ProjektComponent} from './projekt/projekt.component';
import {TabelleskillsComponent} from './tabelleskills/tabelleskills.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProjectsDetailsDialogComponent} from './projects-details-dialog/projects-details-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProjektListeComponent} from './projekt-liste/projekt-liste.component';
import { SucheComponent } from './suche/suche.component';


@NgModule({
  declarations: [
    AppComponent,
    MitarbeiterKurzvorstellungComponent,
    SkillsComponent,
    ProjektComponent,
    TabelleskillsComponent,
    ProjectsDetailsDialogComponent,
    ProjektListeComponent,
    SucheComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
