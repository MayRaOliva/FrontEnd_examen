import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dasboard/dasboard.component';
import { CambiarPasswordComponent } from './components/dasboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './components/dasboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './components/dasboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
