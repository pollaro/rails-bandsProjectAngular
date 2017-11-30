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
    details = new class Detail{
        band = ''
        venue = ''
        city = ''
        state = ''
    }
    openOrClose = false

    constructor(private _concertService: ConcertsService){
        this.openOrClose = false
    }

    ngOnInit() {
        this.getAllConcerts()
        this.windowHeight = window.innerHeight
    }

    getAllConcerts(){
        this._concertService.getAllConcerts(
            (response) => { console.log(response); this.concerts = response }
        )
    }

    showConcert(id){
        this._concertService.showConcert(id,
            (response) => { this.details = response }
        )
        this.openOrClose = true
    }

    opener(boolean){
        this.openOrClose = boolean
    }

}
