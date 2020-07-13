import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth/';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from './user1.model';

@Injectable({
    providedIn:  'root'
})
export class UserService {

  firestoreUser;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              public db: AngularFirestore,

 ){
 }


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          console.log("user Service get current user:", user)
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  
  // new update user function from auth service
  public updateUserData(user){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)
    const data: User = {
      uid: user.uid,
      email: user.email,
      lastName: user.lastName,
      role: user.role ||"guest",
      child1: user.child1,
      grade1: user.grade1,
      subject1: user.subject1,
      child2: user.child2 || "NA",
      grade2: user.grade2 || 0,
      subject2: user.subject2 || "NA",
      parentName: user.parentName,
    }
    //console.log("data", data)
     userRef.set(data, { merge: true})
  }

  public registerUser(userID){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${userID.uid}`)
    const data: User = {
      uid: userID.uid,
      email: userID.email,
      lastName: userID.lastName,
      role: "guest",
      child1: userID.child1,
      grade1: userID.grade1,
      subject1: userID.subject1,
      child2: "NA",
      grade2: 0,
      subject2: "NA",
      parentName: userID.parentName,
    }

    userRef.set(data, {merge: true})
  }

}
