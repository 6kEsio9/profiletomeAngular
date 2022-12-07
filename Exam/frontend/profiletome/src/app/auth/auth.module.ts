import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRouter } from './auth-routing-module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRouter,
    AppRoutingModule
  ]
})
export class AuthModule { }
