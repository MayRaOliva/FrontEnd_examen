import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  login: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }

  log(): void {
    console.log(this.login)

    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }

    this.loading= true;

    setTimeout(() => {
    if (usuario.nombreUsuario === 'tomi' && usuario.password === '654321'){
        this.router.navigate(['/dasboard']);
  
    } else {
      this.toastr.error('Usuario y/o contraseña incorrecto', 'Error');
      this.login.reset();
    } 
    this.loading= false;

    } ,3000);

    console.log(usuario);

  }
  }

 

  



  


