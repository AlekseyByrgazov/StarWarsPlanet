import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class PlanetService {
    constructor(private http: HttpClient) {
    }

    getAll(page: number): Observable<any> {
      return this.http.get<any>(`https://swapi.dev/api/planets/?page=${page}`)
    }

    getPerson(url: string): Observable<any> {
      return this.http.get(url)
    }
}
