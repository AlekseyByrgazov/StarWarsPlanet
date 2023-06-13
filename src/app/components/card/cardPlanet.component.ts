import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PlanetResidents, PlanetsResultsInterface} from "../../models/planets";
import {PlanetService} from "../../services/services.planets";

@Component({
    selector: 'card-planet',
    templateUrl: './cardPlanet.component.html',
    styleUrls: ['./cardPlanet.component.scss']
})

export class CardComponent implements OnInit {

  planetDetail: PlanetsResultsInterface;
  decode: any;
  residents: PlanetResidents[] = [];
  buffer: PlanetResidents[] = [];

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService) {
  }

  ngOnInit(): void {
    const base = this.route.snapshot.queryParamMap.get('detail');
    if (base != null) {
      this.decode = decodeURIComponent(escape(window.atob(base)));
    }
    this.planetDetail = JSON.parse(this.decode);
    this.planetDetail.residents.forEach((item: any) => {
      this.planetService.getPerson(item).subscribe((res: PlanetResidents) => {
        this.residents.push(res);
        this.buffer.push(res);
      })
    })
  }

  filterGender(gender: string) {
    this.residents = this.buffer;
    if (gender !== 'all') {
      this.residents = this.residents.filter(person => person.gender === gender);
    }
  }

}
