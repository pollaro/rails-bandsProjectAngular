import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { BandsComponent } from './dashboard/bands/bands.component'
import { ConcertsComponent } from './dashboard/concerts/concerts.component'
import { FriendsComponent } from './dashboard/friends/friends.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'concerts', component: ConcertsComponent },
      { path: 'bands', component: BandsComponent },
      { path: '', pathMatch: 'full', component: FriendsComponent }
    ]
  },
  { path: 'bands', component: BandsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
