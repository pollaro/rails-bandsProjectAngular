import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ShowConcertComponent } from './dashboard/show-concert/show-concert.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, children:[
        { path: 'concerts/:id', component: ShowConcertComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
