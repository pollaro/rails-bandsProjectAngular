import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    newUser = new class{
        firstName = ''
        lastName = ''
        email = ''
        city = ''
        state = ''
        password = ''
    }

    loginUser = new class{
        logEmail = ''
        logPass = ''
    }

    constructor() { }

    ngOnInit() {
    }

}
