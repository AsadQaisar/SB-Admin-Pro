import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component'; 
import { SignupComponent } from './pages/auth/signup/signup.component'; 
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component'; 
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DefaultComponent } from './pages/dashboards/default/default.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Redirect to login by default
    { path: 'auth/login', component: LoginComponent }, // Login route
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/forgot-password', component: ForgotPasswordComponent },
    {
        path: '',
        component: DashboardLayoutComponent, // Wraps pages with sidebar, header, footer
        children: [
          { path: 'dashboard', component: DefaultComponent }
        ]
      },
      { path: '**', redirectTo: 'dashboard' } // Default route
];
