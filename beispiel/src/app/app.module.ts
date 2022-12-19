import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { SkillsComponent } from './skills/skills.component';
import { FaehigkeitComponent } from './faehigkeit/faehigkeit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    FaehigkeitComponent,



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
