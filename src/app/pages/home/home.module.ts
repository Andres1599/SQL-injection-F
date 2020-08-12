import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserService } from '../../services/user/user.service';
import { MatTableModule } from '@angular/material/table';
import { ErrorComponent } from '../../components/error/error.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, ErrorComponent],
  imports: [CommonModule, HomeRoutingModule, MatTableModule, MatListModule, MatButtonModule],
  providers: [UserService],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
