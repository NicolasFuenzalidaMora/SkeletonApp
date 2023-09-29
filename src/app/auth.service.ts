import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() { }

  // Método para iniciar sesión
  login(username: string, password: string): boolean {
    // Verifica las credenciales aquí
    if (username === 'usuario' && password === 'contraseña') {
      this.isAuthenticated.next(true); // Establece el estado de autenticación en verdadero
      return true;
    }
    return false;
  }

  // Método para verificar el estado de autenticación
  isAuthenticatedUser(): BehaviorSubject<boolean> {
    return this.isAuthenticated;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isAuthenticated.next(false); // Establece el estado de autenticación en falso
  }
}
