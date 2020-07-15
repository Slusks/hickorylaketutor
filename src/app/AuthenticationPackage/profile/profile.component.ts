import { Component, OnInit, Inject, Input } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';
import { ProfileResolver } from './profile.resolver';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData;
  //user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;
  userLoaded = false;
  userUpdated: Boolean;
  

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {

  }

ngOnInit() {
  this.authService.user$.subscribe(response =>{
    //console.log("auth service response", response),
    this.userLoaded=true,
    this.userData = response;
    this.createForm(response);
  })}


  



  //parentName, lastName, child1, grade1, subject1, child2, grade2, subject2
  createForm(userInfo) {
    this.profileForm = this.fb.group({
      parentName: [userInfo.parentName, Validators.required ],
      lastName: [userInfo.lastName, Validators.required ],
      child1: [userInfo.child1, Validators.required ],
      grade1: [userInfo.grade1, Validators.required ],
      subject1: [userInfo.subject1, Validators.required ],
      child2: [userInfo.child2, Validators.required ],
      grade2: [userInfo.grade2, Validators.required ],
      subject2: [userInfo.subject2, Validators.required ],
      email: [userInfo.email, Validators.required ],
      uid: [userInfo.uid]
    });
  }

  save(formValue){
    this.userService.updateUserData(formValue);
    this.userUpdated = true; }
    
  }
