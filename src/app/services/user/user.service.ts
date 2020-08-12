import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  readUser(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.apiBase + '/users/');
  }

  createUser(user: Users): Observable<any> {
    return this.http.post(environment.apiBase + 'user', user);
  }

  updateUser(user: Users): Observable<any> {
    return this.http.put(environment.apiBase + 'user', user);
  }

  deleteUser(user: Users): Observable<any> {
    return this.http.delete(environment.apiBase + 'user/' + user.id);
  }

  loginUser(user: Users): Observable<any> {
    return this.http.post(environment.apiBase + 'user/login', user);
  }
}
