import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
import { SignInComponent } from '../app/Authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../app/Authentication/sign-up/sign-up.component';
import { DashboardComponent } from '../app/Authentication/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/Authentication/forgot-password/forgot-password.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { VerifyEmailComponent } from '../app/Authentication/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

