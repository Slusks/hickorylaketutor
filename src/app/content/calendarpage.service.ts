import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@app/AuthenticationPackage/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarPageService {

  userData

  constructor( 
    public firestore:AngularFirestore,
    public authService: AuthService) { }

  

  getUserData(){
    this.authService.user$.subscribe(response => { return response})
  }



}
