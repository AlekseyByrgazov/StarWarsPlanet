import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { HttpClientModule} from '@angular/common/http';
import { CardComponent } from './components/card/cardPlanet.component';
import {MainComponent} from "./components/main/main.component";


@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    CardComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
