import { Component } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  isOpen = false

  constructor(private _http: Http, private _router: Router) {}

  logout() {
    this._http.get('/logout').subscribe((response) => {
      this._router.navigateByUrl('/')
    })
  }
}
