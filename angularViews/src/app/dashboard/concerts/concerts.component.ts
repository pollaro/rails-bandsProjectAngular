import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../../concerts.service'

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

    windowHeight
    concerts = []
    details = {}
    openOrClose = false

    constructor(private _concertService: ConcertsService){
    }

    ngOnInit() {
        this.windowHeight = window.innerHeight
        this._concertService.concertDetails.subscribe(
            (response) => { this.details = response }
        )
        this._concertService.openDiv.subscribe(
            (response) => { this.openOrClose = response}
        )
        this._concertService.allConcerts.subscribe(
            (response) => { this.concerts = response }
        )
    }

    showConcert(id){
        this._concertService.showConcert(id)
    }

    opener(boolean){
        this.openOrClose = boolean
    }

}
