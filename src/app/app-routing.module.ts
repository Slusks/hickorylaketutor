import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
import { ProfileComponent } from './AuthenticationPackage/profile/profile.component';
import { RegisterComponent } from './AuthenticationPackage/register/register.component';
import { ProfileResolver } from './AuthenticationPackage/profile/profile.resolver';
import { AuthGuard } from './AuthenticationPackage/core/auth.guard';
import { LoginComponent } from './AuthenticationPackage/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'profile', component: ProfileComponent,  resolve: { data: ProfileResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

