import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from "../models/personajes";
import { MD5 } from "crypto-js";

@Injectable({
    providedIn: 'root'
})

export class Personajes_services {
    private _uri: string = "https://gateway.marvel.com:443/v1/public/characters";
    private ts: string = "50000";
    private privateKey: string = "262ec625738c5c1f4c0f797b9b00d18632c4f6b7";
    private publicKey: string = "66b313a48e0b121e216e4a6b217d0ced";

    constructor(private http: HttpClient) { }

    getHashCode() {
        var hashCode = MD5(this.ts + this.privateKey + this.publicKey).toString();
        return hashCode;
    }

    getPersonajes(orderBy: string = "name", offset: number = 1, nombre: string): Observable<Personaje> {
        debugger;
        let name = nombre == "" ? "" : `name=${nombre}&`;
        offset = offset < 0 ? 1 : offset;
        const endpoint = `${this._uri}?${name}limit=10&offset=${(offset - 1) * 10}&orderBy=${orderBy}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.getHashCode()}`;
        return this.http.get<Personaje>(`${endpoint}`).pipe(map((data: any) => (data.data)));
    }

    getPersonaje(id: string): Observable<any> {
        debugger;
        const endpoint = `${this._uri}/${id}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.getHashCode()}`;
        return this.http.get<any>(`${endpoint}`).pipe(map((data: any) => (data.data.results[0])));
    }
}


