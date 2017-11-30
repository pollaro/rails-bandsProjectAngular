import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../concerts.service'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    // These variables and declarations may all have to be changed when backend connected

    current_user

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

    constructor(private _concertService: ConcertsService, private _userService: UsersService) { }

    ngOnInit() {
        this.current_user = this._userService.getCurrentUser()
        console.log(this.current_user)
        this.getAllAttended(this.current_user)
    }

    getAllAttended(user){
        this._concertService.getAllAttended(user,
            (response) => { this.shows = response }
    )}

    findShow(){
        this._concertService.findConcert(this.show,
            (response) => { console.log(response) }
        )
    }

}
