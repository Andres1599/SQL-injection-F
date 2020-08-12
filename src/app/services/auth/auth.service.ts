import { Injectable } from '@angular/core';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly userKey = 'token';

  constructor() {}

  setLogin(user: Users): void {
    localStorage.setItem(this.userKey, '');
  }

  getCurrentUser(): Users {
    return {};
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
  }

}
