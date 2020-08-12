import { Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly userKey = 'token';

  constructor(private route: Router) {}

  setLogin(user: Users): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.route.navigateByUrl('/home');
  }

  getCurrentUser(): Users {
    return JSON.parse(localStorage.getItem(this.userKey));
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
    this.route.navigateByUrl('/login');
  }
}
