import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../../models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource: MatTableDataSource<Users>;
  displayColumns: string[] = ['id', 'name', 'last_name', 'email'];
  currentUser: Users;
  showError = false;
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    try {
      this.userService.readUser().subscribe((value) => {
        if (value.length >= 0) {
          this.dataSource = new MatTableDataSource<Users>(value);
        } else {
          this.showError = true;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  logOut(): void {
    this.authService.logout();
  }
}
