import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {SkillsComponent} from './skills/skills.component';
import {FaehigkeitComponent} from './faehigkeit/faehigkeit.component';
import { TabelleskillsComponent } from './tabelleskills/tabelleskills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    FaehigkeitComponent,
    TabelleskillsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
