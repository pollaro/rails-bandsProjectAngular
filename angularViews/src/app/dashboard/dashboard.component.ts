import { Component, OnInit } from '@angular/core'
import { ConcertsService } from '../concerts.service'
import { UsersService } from '../users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  current_user
  foundShow = { band: { name: '' }, venue: '', city: '', state: '', date: '', songlist: [], lat: '', longitude: '' }
  openOrClose = false
  attended = false
  status = "Didn't go"

  show = { concert: { date: '', band: { name: '' }, city: '' } }
  friend = { friend: '' }
  shows = [{ concert: { band: { name: '' }, city: '', date: '' } }]
  bands = []
  friends = []

  constructor(private _concertService: ConcertsService, private _userService: UsersService, private _router: Router) {
    this.openOrClose = false
  }

  ngOnInit() {
    this.current_user = this._userService.getCurrentUser()
    this.getAllAttended(this.current_user)
  }

  getAllAttended(user) {
    this._concertService.getAllAttended(user, (response) => {
      this.shows = response
    })
  }

  findShow() {
    this._concertService.findConcert(this.show, (response) => {
      this.foundShow = response
      console.log(response)
      this.openOrClose = true
    })
  }

  addShow() {
    this._concertService.saveShow(this.foundShow, (response) => {
      console.log(response)
      this.shows.unshift(response)
    })
    this.attended = true
    this.status = 'I went!'
  }

  getShow(id) {
    this._concertService.showConcert(id, (response) => {
      this.foundShow = response
    })
  }

  opener(boolean) {
    this.openOrClose = boolean
  }
}
