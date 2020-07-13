import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';


@Injectable({
    providedIn:  'root'
})
export class ProfileResolver implements Resolve<FirebaseUserModel> {

  constructor(public userService: UserService, 
            private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<FirebaseUserModel> {

    let user = new FirebaseUserModel();
    //This is returning relevant data from the google back end, which really means we're just using the authentication portion. This isn't returning any firestore data.
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
        if(res.providerData[0].providerId == 'password'){
          console.log("user Service User Data:", res)
          user.uid = res.uid;
          user.email = res.email
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
        else{
          user.email = res.email
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      })
    })
  }
}