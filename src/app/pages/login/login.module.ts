import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule],
  providers: [UserService, AuthService],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
