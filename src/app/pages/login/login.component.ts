import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Users } from '../../models/users';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    try {
      const user = this.transformData(this.formLogin);
      this.userService.loginUser(user).subscribe((value: Users[]) => {
        if (value.length > 0) {
          console.log(value);
          this.authService.setLogin(value[0]);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  transformData(formGroup: FormGroup): Users {
    try {
      if (formGroup.valid) {
        return {
          email: formGroup.get('email').value,
          password: formGroup.get('password').value,
        };
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
}
