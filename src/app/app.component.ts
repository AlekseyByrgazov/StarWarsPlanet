import { Component } from '@angular/core';
import {Planets, PlanetsResultsInterface} from './models/planets';
import { OnInit } from '@angular/core';
import { PlanetService } from './services/services.planets';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
  ){}

  ngOnInit(): void {
  }

}
