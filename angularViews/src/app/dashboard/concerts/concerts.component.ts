import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../../concerts.service'

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

    concerts

    constructor(private _concertService: ConcertsService){}

    ngOnInit() {
        this.getAllConcerts()
    }

    getAllConcerts(){
        this._concertService.getAllConcerts(
            (response) => { console.log(response); this.concerts = response }
        )
    }

}
