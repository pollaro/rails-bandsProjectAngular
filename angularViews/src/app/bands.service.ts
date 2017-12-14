import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class BandsService {

    constructor(private _http: Http) { }

    getAllBands(callback){
        this._http.get('/bands').subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

    bandSearch(bandname,callback){
        var parsedRes
        this._http.get('https://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+bandname+'&api_key=ba268e660cd43a240846b8eec02b92f9&limit=5&format=json').subscribe(
            (response) => {
                response = response.json();
                parsedRes = response['results']['artistmatches']['artist']
                callback(parsedRes) },
            (error) => { console.log(error) }
        )
    }

    addBand(newBand,callback){
        this._http.post('/bands/new',newBand).subscribe(
            (response) => { callback(response) },
            (error) => { console.log(error) }
        )
    }

}
