import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {SkillsComponent} from './skills/skills.component';
import {ProjektComponent} from './projekt/projekt.component';
import { TabelleskillsComponent } from './tabelleskills/tabelleskills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsDetailsDialogComponent } from './projects-details-dialog/projects-details-dialog.component';
import {MatDialogModule, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { ProjektListeComponent } from './projekt-liste/projekt-liste.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ProjektComponent,
    TabelleskillsComponent,
    ProjectsDetailsDialogComponent,
    ProjektListeComponent,
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
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
