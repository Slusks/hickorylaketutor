import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import {
    AngularFirestore,
    AngularFirestoreDocument
} from '@angular/fire/firestore'

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user1.model';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { RegisterComponent } from '../register/register.component';


//https://github.com/fireship-io/55-angularfire-google-auth/blob/master/src/app/services/auth.service.ts

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              public userService: UserService,
              public register: RegisterComponent) {

        //This is how we're getting into the firestoreDB        
        this.user$ = this.afAuth.authState.pipe(
          switchMap(user => {
            if (user){
              return this.afs.doc<User>(`/users/${user.uid}`).valueChanges();
            } else {
                console.log("no user")
                return of(null)
            }
          })
        )
              } //end constructor




  async emailSignin(value){
    const credential = await this.afAuth.signInWithEmailAndPassword(value.email, value.password)
    //console.log("credential", credential)
    this.router.navigate(['/home'])
  }


  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider)
    try {
      return this.userService.updateUserData(credential)
    } catch (error){
        try {
          return this.register.registerUser_GU(credential.user)
        }
          catch (error){
            console.log("error:", error)
          }
    } 
  
  this.router.navigate(['/home']) 
}

async FacebookSignin(){
  const provider = new auth.FacebookAuthProvider();
  const credential = await this.afAuth.signInWithPopup(provider)
  try {
    return this.userService.updateUserData(credential)
  } catch (error){
      try {
        return this.register.registerUser_FB(credential.user)
      }
        catch (error){
          console.log("error:", error)
        }
  } 

this.router.navigate(['/home']) 
}

  async signOut(){
    await this.afAuth.signOut();
    alert("Successfully Logged Out")
    console.log("Logged Out")
    this.router.navigate(['/home']) // the example uses the empty / here but i'm routing to login directly for memory sake
  }



  

}
