import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../../models/users';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private route: Router) {
    this.headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
  }

  readUser(): Observable<{ users: Users[] }> {
    return this.http.get<{ users: Users[] }>(environment.apiBase + '/users/', {
      headers: this.headers,
    });
  }

  createUser(user: Users): Observable<any> {
    return this.http.post(environment.apiBase + '/user', user, {
      headers: this.headers,
    });
  }

  updateUser(user: Users): Observable<any> {
    return this.http.put(environment.apiBase + '/user', user, {
      headers: this.headers,
    });
  }

  deleteUser(user: Users): Observable<any> {
    return this.http.delete(environment.apiBase + '/user/' + user.id, {
      headers: this.headers,
    });
  }

  loginUser(user: Users): Observable<Users> {
    return this.http
      .post(environment.apiBase + '/user/login', user, {
        headers: this.headers,
      })
      .pipe(
        map((value: any) => {
          return {
            name: this.transformData(value).name,
            last_name: this.transformData(value).last_name,
            id: this.transformData(value).id,
            email: this.transformData(value).email,
          };
        })
      );
  }

  private transformData(value: any): Users {
    try {
      const userTransform = value.user.reduce((acc, currVal) => currVal);
      return userTransform;
    } catch (error) {
      return {
        name: null,
        last_name: null,
        id: null,
        email: null,
      };
    }
  }
}
