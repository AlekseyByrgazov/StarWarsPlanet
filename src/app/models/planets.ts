export interface Planets {
    count: number,
    next: string,
    previous: string | number,
    results: PlanetsResultsInterface[],
    detail: boolean,
}

export interface PlanetsResultsInterface {
    name:string,
    rotation_period:number,
    orbital_period:number,
    diameter:number,
    climate: any,
    gravity:any,
    terrain: any,
    surface_water:any,
    population:any,
    residents: PlanetResidents[],
    films:any,
    created:any,
    edited:any,
    url:any,
}

export interface PlanetResidents {
    name: string,
    height: number,
    mass: any,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    gender: string,
    birth_year: string,
}

