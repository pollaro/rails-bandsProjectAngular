import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    newUser = {}
    logUser = {}

    constructor(private _userService: UsersService, private _router: Router){}

    ngOnInit() {
    }

    regNewUser(){
        console.log(this.newUser)
        this._userService.regUser(this.newUser,
            (response) => { this._router.navigate(['dashboard'])}
        )
    }

    loginUser(){
        console.log(this.logUser)
        this._userService.checkUser(this.logUser,
            (response) => { this._router.navigate(['dashboard'])}
    )}

}
