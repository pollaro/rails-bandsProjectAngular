import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class BandsService {

    constructor(private _http: Http) { }

    getAllBands(callback){
        this._http.get('http://localhost:3000/bands').subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

    bandSearch(bandname,callback){
        this._http.get('https://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+bandname+'&api_key=ba268e660cd43a240846b8eec02b92f9&limit=5&format=json').subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

}
