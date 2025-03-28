
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/authService/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-firebase-login';


  // isLoading = false;

  // public appPages = [
  //     {
  //         title: 'Inicio',
  //         // las url debe coincidir con la rutas del router
  //         url: '/index',
  //     },
  //     {
  //         title: 'Quienes somos',
  //         url: '/whoweare',
  //     },
  //     {
  //         title: 'Acceso',
  //         url: '/login',
        
  //     },

  //   //   {
  //   //     title: 'Registro',
  //   //     url: '/',
      
  //   // }, en este no uso registro
      
  //     ]




  // prueba 
  public appPages = [
    {
      title: 'Inicio',
      url: '/index',
    },
    {
      title: 'Quienes somos',
      url: '/whoweare',
    },
    {
      title: 'Acceso',
      url: '/login',  // Este enlace solo se mostrará si el usuario no está logueado
    }
  ];

  user$: Observable<User | null>; // Estado de autenticación del usuario

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Obtener el estado de autenticación del usuario desde el servicio
    this.user$ = this.authService.user$;

    // Nos suscribimos al estado de autenticación y actualizamos el array appPages
    this.user$.subscribe(user => {
      if (user) {
        // Si el usuario está logueado, actualizar los enlaces
        this.appPages = [
          {
            title: 'Inicio',
            url: '/index',
          },
          {
            title: 'Quienes somos',
            url: '/whoweare',
          },
      
        ];
      } else {
        // Si el usuario no está logueado, mostrar solo los enlaces públicos
        this.appPages = [
          {
            title: 'Inicio',
            url: '/index',
          },
          {
            title: 'Quienes somos',
            url: '/about',
          },
          {
            title: 'Acceso',
            url: '/login',
          }
        ];
      }
    });
  }
}
