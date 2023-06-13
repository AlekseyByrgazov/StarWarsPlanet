import { Component, Input } from "@angular/core";
import {Planets, PlanetsResultsInterface} from "src/app/models/planets";

@Component({
    selector: 'planet-component',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.components.scss']
})

export class PlanetComponent {
    @Input() planet: PlanetsResultsInterface;
}
