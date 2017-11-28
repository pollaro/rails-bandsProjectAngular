import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowConcertComponent } from './dashboard/show-concert/show-concert.component';
import { ConcertsService } from './concerts.service'
import { UsersService } from './users.service';
import { BandsComponent } from './bands/bands.component'
import { BandsService } from './bands.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ShowConcertComponent,
    BandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ConcertsService,
      UsersService,
      BandsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
