import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'users/login',
        component: LoginComponent
    },
    {
        path: 'users/register',
        component: RegisterComponent
    },
    {
        path: 'users/logout',
        canActivate: [AuthGuard],
        component: LogoutComponent
    },
    {
        path: 'profile/:id',
        component: ProfileComponent
    }
];

export const AuthRouter = RouterModule.forChild(routes);