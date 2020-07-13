import { Component} from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user.service';
import * as firebase from 'firebase';
import { User } from '../core/user1.model'
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(  private router: Router,
                private fb: FormBuilder,
                public userService: UserService,
                private afs: AngularFirestore
              ) {this.createForm();
                }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }
// This is creating the firestore entry for the user. values outside of the id and email are just set to default null values and will be set when the profile is made
tryRegister(values){
  const fireRef = this.afs.collection('/users')
  let data: User = {
    uid: values.uid,
    email: values.email,
    lastName: "",
    role: "guest",
    child1: "",
    grade1: null,
    subject1: "",
    child2: "",
    grade2: null,
    subject2: "",
    parentName: "",
  }
  console.log("registration data package", data)
  fireRef.doc(values.uid).set(data, {merge: true})
  this.router.navigate(['/profile'])

  }






// new register user function, the EP refers to the email and password method of registering
  registerUser_EP(value){
    return firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(res =>{
      alert("User Registered!"), console.log("res",res), this.router.navigate['/profile'];
      this.tryRegister(res.user)
    }).catch(error => {
        alert(error.message),
        console.log("something went wrong", error.message)
        
    })
  }

  // Same as above except for someone registering using their google account. Will need similar for facebook
  registerUser_GU(user){
    this.tryRegister(user)
  }
}
