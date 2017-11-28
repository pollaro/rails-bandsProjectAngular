import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    // These variables and declarations may all have to be changed when backend connected

    show = new class{
        date = ''
        artist = ''
        city = ''
    }

    friend = new class{
        friend = ''
    }

    shows = []
    bands = []
    friends = []

    constructor() { }

    ngOnInit() {
    }

}
