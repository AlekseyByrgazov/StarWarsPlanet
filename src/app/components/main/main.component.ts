import { Component} from "@angular/core";
import {Planets, PlanetsResultsInterface} from "../../models/planets";
import {PlanetService} from "../../services/services.planets";
import {Router} from "@angular/router";

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent {
  planets: Planets;
  page: number = 1
  title = 'Star Wars';


  constructor(
    private planetService: PlanetService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.planetService.getAll(this.page).subscribe(planets => {
      this.planets = planets
    })
  }

  nextPage() {
    if (this.page > 6) {
      return
    } else {
      this.page++;
      this.getPlanets();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getPlanets();
    } else {
      return;
    }
  }

  openCurrentPlanet(planet: PlanetsResultsInterface) {
    console.log('click');
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(planet))))
    this.router.navigate(['/planet'], {queryParams: {detail: encoded}})
  }
}
