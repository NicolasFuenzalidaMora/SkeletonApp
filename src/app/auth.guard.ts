import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica si el usuario está autenticado en localStorage
    const isUserLoggedIn = localStorage.getItem('ingresado') === 'true';

    if (isUserLoggedIn) {
      return true; // Usuario autorizado
    } else {
      this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
      return false; // Usuario no autorizado
    }
  }
}
