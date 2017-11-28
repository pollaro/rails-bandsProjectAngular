import { Component, OnInit } from '@angular/core';
import { BandsService } from '../bands.service'

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {

    band = new class Band{
        bandname = ''
    }

    bands
    searchResults

    constructor(private _bandService: BandsService){}

    ngOnInit() {
        this.getAll()
    }

    getAll(){
        this._bandService.getAllBands(
            (response) => { this.bands = response }
        )
    }

    bandSearch(){
        this._bandService.bandSearch(this.band.bandname,
            (response) => { this.searchResults = response }
        )
    }

    addBand(newBand){
        this._bandService.addBand(newBand,
            (response) => { console.log(response) }
        )
        this.getAll()
    }

}
