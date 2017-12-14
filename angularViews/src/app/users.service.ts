import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class UsersService {

    private current_user

    constructor(private _http: Http){}

    getCurrentUser(){
        return this.current_user
    }

    setCurrentUser(user){
        this.current_user = user
    }

    regUser(newUser,callback){
        this._http.post('/new',newUser).subscribe(
            (response) => {
                this.setCurrentUser(response.json())
                callback(response)
            }
        )
    }

    checkUser(user,callback){
        this._http.post('/',user).subscribe(
            (response) => {
                this.setCurrentUser(response.json());
                callback(response)},
            (error) => { console.log(error) }
        )
    }

}
