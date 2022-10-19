import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import {FormsModule} from "@angular/forms";
import { NeuformComponent } from './neuform/neuform.component';
import { AutoComponent } from './auto/auto.component';
import { ListeleComponent } from './listele/listele.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    NeuformComponent,
    AutoComponent,
    ListeleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
