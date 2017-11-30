import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http'

@Injectable()
export class ConcertsService {

    constructor(private _http: Http){}

    getAllAttended(user,callback){
        this._http.get('http://localhost:3000/users/'+user['id']+'/attended').subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

    getAllConcerts(callback){
        this._http.get('http://localhost:3000/concerts').subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

    showConcert(id,callback){
        this._http.get('http://localhost:3000/concerts/'+id).subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

    findConcert(req,callback){
        // let header = new Headers()
        // let searchParam = new URLSearchParams()
        // header.set('x-api-key',"1128bdd4-2942-4334-b4fa-5cf725b57260")
        // header.set('Accept','application/json')
        // searchParam.set('artistName',req['artist'])
        // searchParam.set('cityName',req['city'])
        // searchParam.set('date',req['date'])
        // let searchOptions = new RequestOptions({headers: header, params: searchParam})
        // this._http.get('https://api.setlist.fm/rest/1.0/search/setlists',searchOptions).subscribe(
        //     (response) => { console.log(response.json()) },
        //     (error) => { console.log(error) }
        // )
        this._http.post('http://localhost:3000/concerts/find',req).subscribe(
            (response) => { console.log(response) },
            (error) => { console.log(error) }
        )
    }

}
