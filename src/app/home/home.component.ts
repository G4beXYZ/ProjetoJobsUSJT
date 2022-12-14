import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: firebase.User;

  constructor(private auth: AuthService,
    private router: Router) {

  }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
    window.location.reload();
  }

  register() {
    this.router.navigate(['/register']);

  }

}
