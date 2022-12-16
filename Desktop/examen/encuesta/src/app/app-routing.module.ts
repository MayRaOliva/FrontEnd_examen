import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import {DashboardComponent} from './components/dasboard/dasboard.component'
import { CuestionariosComponent } from './components/dasboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/dasboard/cambiar-password/cambiar-password.component';
import { NavbarComponent } from './components/dasboard/navbar/navbar.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'inicio',  component: InicioComponent, children: [
    
    {path: '', component: BienvenidaComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
  ]},
  {path: 'dasboard', component: DashboardComponent, children:[
    {path: '', component: CuestionariosComponent},
    {path: 'cambiarPassword', component: CambiarPasswordComponent}
  ]}, 

  {path: '**', redirectTo: '/inicio', pathMatch:'full'},
];


@NgModule({ 
  imports: [ RouterModule, RouterModule.forRoot(routes)],
  
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
