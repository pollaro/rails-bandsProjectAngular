import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ConcertsService } from './concerts.service'
import { UsersService } from './users.service'
import { BandsComponent } from './dashboard/bands/bands.component'
import { BandsService } from './bands.service'
import { ConcertsComponent } from './dashboard/concerts/concerts.component'
import { FriendsComponent } from './dashboard/friends/friends.component'

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, BandsComponent, ConcertsComponent, FriendsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [ConcertsService, UsersService, BandsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
