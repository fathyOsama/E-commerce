import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated = false;
  userFullName = '';

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe(
      authenticated => {

        this.isAuthenticated = authenticated;

        if (authenticated) {
          this.getUserDetails();
        }

      }
    );
  }

  getUserDetails(): void {

    this.auth.user$.subscribe(user => {

      this.userFullName =
        user?.name ||
        user?.email ||
        '';

    });
  }

  logout(): void {

    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin
      }
    });

  }

}
