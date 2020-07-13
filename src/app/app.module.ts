import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';

// Authentication for Firebase is all coming from here: https://www.positronx.io/full-angular-7-firebase-authentication-system/
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';



import { DashboardComponent } from './Authentication/dashboard/dashboard.component';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Authentication/verify-email/verify-email.component';

import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,

    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
