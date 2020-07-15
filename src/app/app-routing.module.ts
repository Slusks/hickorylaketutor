import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
import { ProfileComponent } from './AuthenticationPackage/profile/profile.component';
import { RegisterComponent } from './AuthenticationPackage/register/register.component';
import { ProfileResolver } from './AuthenticationPackage/profile/profile.resolver';
import { AuthGuard } from './AuthenticationPackage/core/auth.guard';
import { LoginComponent } from './AuthenticationPackage/login/login.component';
import { HomepageComponent } from './content/homepage/homepage.component';
import { AboutpageComponent } from './content/aboutpage/aboutpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'profile', component: ProfileComponent, resolve: {data: ProfileResolver}},
  { path: 'home', component: HomepageComponent, resolve: {data: ProfileResolver}},
  { path: 'about', component: AboutpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

