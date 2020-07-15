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
    private authService: AuthService
  ) { }

  ngOnInit() {
  this.authService.user$.subscribe(response =>{
    console.log("auth service response", response),
    this.userLoaded=true,
    this.userData = response;
  })
  }

}
