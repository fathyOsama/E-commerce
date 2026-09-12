import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-status',
  // template: '<button (click)="login()">Log in</button>',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent {

  isAuthenticated: boolean = false;
  profileJson: string | undefined;
  userEmail: string | undefined;
  userName: string | undefined;
  storage: Storage = sessionStorage;

  constructor(private auth: AuthService, @Inject(DOCUMENT) private doc: Document) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(
      (authenticated: boolean) => {
        this.isAuthenticated = authenticated;
        console.log('User is authenticated: ', this.isAuthenticated);
      }
    );
    this.auth.user$.subscribe(
      (user) => {
        this.userEmail = user?.email;
        this.userName = user?.name;              // add this
        this.storage.setItem('userEmail', JSON.stringify(this.userEmail));
        console.log('User Name: ', this.userName);
      }
    );
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    // this.auth.logout({ returnTo: this.doc.location.origin });
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin
      }
    });
  }

}
