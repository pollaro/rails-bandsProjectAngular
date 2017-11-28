import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ConcertsService {

    constructor(private _http: Http){}

    getAllAttended(user,callback){
        this._http.get('http://localhost:3000/users/'+user['id']+'/attended').subscribe(
            (response) => { callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

}
