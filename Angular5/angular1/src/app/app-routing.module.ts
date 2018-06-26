import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path:'', redirectTo:'login', pathMatch: 'full' 
    },
    {
        path: 'login' ,component: LoginComponent 
    },
    {
        path: 'home' ,component: HomeComponent
    
    }
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
// {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
// {path: 'heroes' ,component: HeroesComponent },
// {path: 'dashboard' ,component: DashboardComponent },
// {path: 'detail/:id' ,component: HeroDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }