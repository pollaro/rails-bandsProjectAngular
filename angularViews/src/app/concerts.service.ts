import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Router } from '@angular/router'

@Injectable()
export class ConcertsService {

    allConcerts = new BehaviorSubject([])
    concertDetails = new BehaviorSubject({})
    openDiv = new BehaviorSubject(false)
    tempDetails

    constructor(private _http: Http, private _router: Router){
        this.getAllConcerts()
    }

    getAllAttended(user,callback){
        this._http.get('http://localhost:3000/users/'+user['id']+'/attended').subscribe(
            (response) => { console.log(response.json()); callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

    getAllConcerts(){
        this._http.get('http://localhost:3000/concerts').subscribe(
            (response) => { this.allConcerts.next(response.json()) },
            (error) => { console.log(error) }
        )
    }

    showConcert(id){
        this._http.get('http://localhost:3000/concerts/'+id).subscribe(
            (response) => { this.concertDetails.next(response.json())
                this.openDiv.next(true)
            },
            (error) => { console.log(error) }
        )
    }

    findConcert(req,callback){
        this._http.post('http://localhost:3000/concerts/find',req).subscribe(
            (response) => { this.tempDetails = response.json()
                if(this.tempDetails['attended']){
                    this.concertDetails.next(response.json())
                    this.openDiv.next(true)
                }else{
                    callback(response.json())
                }
            },
            (error) => { console.log(error) }
        )
    }

    saveShow(show,callback){
        this._http.post('http://localhost:3000/concerts/save',show).subscribe(
            (response) => {  callback(response.json()) },
            (error) => { console.log(error) }
        )
    }

}
