import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { highlightSearch } from '@syncfusion/ej2/dropdowns';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoTeste';

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


  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
    window.location.reload();
  }

  register() {
    this.router.navigate(['/register']);

  }
}
