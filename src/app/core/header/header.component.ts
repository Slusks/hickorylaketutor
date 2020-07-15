import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/AuthenticationPackage/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData;
  userLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
  this.authService.user$.subscribe(response =>{
    //console.log("auth service response", response),
    this.userData = response,
    this.welcomeFunction(response)
  })


    console.log("this.userLoaded", this.userLoaded)
  }


welcomeFunction(data){
  if (this.userData == null || undefined){
    return this.userLoaded == false;
  } else {this.userLoaded = true}
}

}

