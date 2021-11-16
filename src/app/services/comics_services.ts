import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { MD5 } from "crypto-js";
import { Comics } from "../models/comics";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Comics_services {
    private _uri: string = "https://gateway.marvel.com:443/v1/public/comics";
    private ts: string = "50000";
    private privateKey: string = "262ec625738c5c1f4c0f797b9b00d18632c4f6b7";
    private publicKey: string = "66b313a48e0b121e216e4a6b217d0ced";

    constructor(private http: HttpClient) { }

    getHashCode() {
        var hashCode = MD5(this.ts + this.privateKey + this.publicKey).toString();
        return hashCode;
    }

    getComic(id: string): Observable<Comics> {
        debugger;
        const endpoint = `${this._uri}/${id}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.getHashCode()}`;
        return this.http.get<Comics>(`${endpoint}`).pipe(map((data: any) => (data.data.results)));
    }
    getComicImage(id: string): Observable<any> {
        debugger;
        const endpoint = `${this._uri}/${id}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.getHashCode()}`;
        return this.http.get<any>(`${endpoint}`).pipe(map((data: any) => (data.data.results[0].thumbnail)));
    }
    getComics(endpoint: any, page: any): Observable<any> {
        debugger;
        endpoint += `?limit=2&offset=${page * 2}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.getHashCode()}`;
        return this.http.get<any>(`${endpoint}`).pipe(map((data: any) => (data.data)));
    }
    getStories(endpoint: any, page: any): Observable<any> {
        debugger;
        endpoint += `?limit=2&offset=${page * 2}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.getHashCode()}`;
        return this.http.get<any>(`${endpoint}`).pipe(map((data: any) => (data.data)));
    }
}