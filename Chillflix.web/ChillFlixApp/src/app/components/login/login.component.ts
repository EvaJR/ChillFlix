import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { 
  }

  ngOnInit() {
  }

  public getLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public login() {
    this.authService.loginUser('admin');
  }

  public logout() {
    this.authService.logoutUser();
  }

}
