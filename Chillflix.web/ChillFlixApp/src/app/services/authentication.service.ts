import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn: boolean = false;
  private userType: string; // bijv. admin, age category, o.i.d. // (enum)

  constructor() { }

  loginUser(userType: string) {
    this.loggedIn = true;
    this.userType = userType;
  }

  logoutUser() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
