import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/'

// Authentication for Firebase is all coming from here: https://www.positronx.io/full-angular-7-firebase-authentication-system/
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RegisterComponent } from './AuthenticationPackage/register/register.component';
import { ProfileComponent } from './AuthenticationPackage/profile/profile.component';
import { LoginComponent } from './AuthenticationPackage/login/login.component';

import { CoreModule } from './core/core.module';
import { ContentModule } from './content/content.module';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    ContentModule
  ],
  providers: [RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
