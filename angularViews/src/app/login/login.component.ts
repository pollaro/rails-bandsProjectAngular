import { Component, OnInit } from '@angular/core'
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
  newUserOpen = false

  constructor(private _userService: UsersService, private _router: Router) {}

  ngOnInit() {}

  regNewUser() {
    this._userService.regUser(this.newUser, (response) => {
      this._router.navigate(['dashboard'])
    })
  }

  newUserDiv(bool) {
    this.newUserOpen = bool
  }

  loginUser() {
    this._userService.checkUser(this.logUser, (response) => {
      this._router.navigate(['dashboard'])
    })
  }
}
