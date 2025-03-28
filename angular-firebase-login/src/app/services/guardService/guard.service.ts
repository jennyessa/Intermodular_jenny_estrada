import { inject, Injectable, OnInit } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';



// ejecuta una fucnion dentro de una variable const authGuard, 
// ventajas puedo exportar una variable y con esta el metodo que le asignamos a esta.
// no puedp exporta metodos pero si constantes. com el arrow funtion.

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    })
  );
};