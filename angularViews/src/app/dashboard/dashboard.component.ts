import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ConcertsService } from '../concerts.service'
import { UsersService } from '../users.service'
import { ConcertsComponent } from './concerts/concerts.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    @ViewChild(ConcertsComponent) _concertsComponent: ConcertsComponent

    current_user
    foundShow = { band:{name: ''}, venue: '', city: '', state: '', date: '', songlist: [], lat: '', longitude: ''}
    openOrClose = false
    attended = false

    show = new class Concert{
        date = ''
        artist = ''
        city = ''
    }

    friend = new class Friendship{
        friend = ''
    }

    shows = []
    bands = []
    friends = []


    constructor(private _concertService: ConcertsService, private _userService: UsersService) {
        this.openOrClose = false
    }

    ngOnInit() {
        this.current_user = this._userService.getCurrentUser()
        console.log(this.current_user)
        this.getAllAttended(this.current_user)
    }

    AfterViewInit(){
        this._concertsComponent
    }

    getAllAttended(user){
        this._concertService.getAllAttended(user,
            (response) => { this.shows = response }
    )}

    findShow(){
        this._concertService.findConcert(this.show,
            (response) => { this.foundShow = response
                console.log(response)
            }
        )
        this.attended = this.foundShow['attended']
        this.openOrClose = true
    }

    getShow(id){
        this._concertsComponent.showConcert(id)
    }

    addShow(){
        this._concertService.saveShow(this.foundShow,
            (response) => { console.log(response) }
        )
        this.attended = true
    }

    opener(boolean){
        this.openOrClose = boolean
    }

}
