import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http'

@Injectable()
export class ConcertsService {

    constructor(private _http: Http){}

    getAllAttended(user,callback){
        this._http.get('http://localhost:3000/users/'+user['id']+'/attended').subscribe(
            (response) => { console.log(response.json()); callback(response.json()) },
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
        this._http.post('http://localhost:3000/concerts/find',req).subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

    saveShow(show,callback){
        this._http.post('http://localhost:3000/concerts/save',show).subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

}
