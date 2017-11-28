import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-show-concert',
  templateUrl: './show-concert.component.html',
  styleUrls: ['./show-concert.component.css']
})
export class ShowConcertComponent implements OnInit {

    paramsIn
    //  Probably will all have to be changed when backend attached

    concerts = { band:{name:"Test Band"}, venue:"test loc", city:"test city",state:"California",date: new Date(),songs:['song1','song2','song3']}

    constructor(private _actRoute: ActivatedRoute){
        this._actRoute.paramMap.subscribe(params => { this.paramsIn = params })
        this.concerts["id"] = this.paramsIn.get('id')
    }

    ngOnInit() {
    }

    attended(){

    }

}
