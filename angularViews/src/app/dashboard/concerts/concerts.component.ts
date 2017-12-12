import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../../concerts.service'

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

    windowHeight
    concerts
    details
    openOrClose = false

    constructor(private _concertService: ConcertsService){
    }

    ngOnInit() {
        this.getAllConcerts()
        this.windowHeight = window.innerHeight
        this._concertService.concertDetails.subscribe(
            (response) => { this.details = response }
        )
        this._concertService.openDiv.subscribe(
            (response) => { this.openOrClose = response}
        )
    }

    getAllConcerts(){
        this._concertService.getAllConcerts(
            (response) => { console.log(response); this.concerts = response }
        )
    }

    showConcert(id){
        this._concertService.showConcert(id)
        // this.openOrClose = true
    }

    opener(boolean){
        this.openOrClose = boolean
    }

}
