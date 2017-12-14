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
    attended = false
    status

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
        this._concertService.showConcert(id,
            (response) => { this.attended = response['attend']
                console.log(this.attended)
                if(this.attended){
                    this.status = 'I went!'
                }else{
                    this.status = "Didn't go"
                }
            }
        )
    }

    opener(boolean){
        this.openOrClose = boolean
        this.details = {band:{},venue:'',city:'',state:'',date:'',songlist:[]}
        this.details['band']['name']=''
    }

    attend(){
        this._concertService.attend(this.attended,this.details['id'],
            (response) => {
                if(response['status']=='added'){
                    this.status = 'I went'
                    this.attended = true
                }else{
                    this.status = "Didn't go"
                    this.attended = false
                }
            }
        )
    }

}
