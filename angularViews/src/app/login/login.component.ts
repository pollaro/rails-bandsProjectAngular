import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    newUser = class User{
        firstName = ''
        lastName = ''
        email = ''
        city = ''
        state = ''
        password = ''
    }

    logUser = new class LoginUser{
        logEmail = ''
        logPass = ''
    }

    constructor(private _userService: UsersService, private _router: Router){}

    ngOnInit() {
    }

    loginUser(){
        console.log(this.logUser)
        this._userService.checkUser(this.logUser,
            (response) => { this._router.navigate(['dashboard'])}
    )}

}
