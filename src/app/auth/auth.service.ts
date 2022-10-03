import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import firebase from "firebase/app";
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  user: firebase.User;
  novoUsuario: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) {  }

  getUserState() {
    return this.afAuth.authState;

  }
  inserirDadosUsuario(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Usuarios/${userCredential.user.uid}`).set({
      email: this.novoUsuario.email,
      pNome: this.novoUsuario.firstName,
      uNome: this.novoUsuario.lastName,
      cargo: 'Usuario do Sistema'
    })
  }

  async login( email: string, password: string) {
    this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch( async error => {
        console.log(error.code);
        switch(error.code)
        {
          case 'auth/invalid-email':
            error.message = "Email mal formatado ou Inválido!!";
            this.eventAuthError.next(error);
            break;
          case 'auth/wrong-password':
            error.message = "Senha Inválida!!";
            this.eventAuthError.next(error);
            break;
          case 'auth/user-not-found':
            error.message = "Usuário não encontrado";
            this.eventAuthError.next(error);
        }
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/home']);
        }
      })


  }

  criarUsuario(user) {
    console.log(user);
    this.afAuth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.novoUsuario = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });

        this.inserirDadosUsuario(userCredential)
          .then(() => {
            this.router.navigate(['/login']);
          });
      })
      .catch( error => {
        console.log(error.code);
        switch(error.code)
        {
          case 'auth/invalid-email':
            error.message = "Email mal formatado ou Inválido!!";
            this.eventAuthError.next(error);
            break;
          case 'auth/wrong-password':
            error.message = "Senha Inválida!!";
            this.eventAuthError.next(error);
            break;
          case 'auth/weak-password':
          error.message = "Senha precisa ter mais de 6 caracteres!";
          this.eventAuthError.next(error);
          break;
          case 'auth/email-already-in-use':
          error.message = "O Email digitado já está sendo utilizado!";
          this.eventAuthError.next(error);
          break;
        }
      });
  }


  async logout() {
    this.afAuth.signOut().then(function() {
      console.log("Logout bem sucedido!")
    }).catch(function(error) {
        console.log(error.code);
    });

  }


}


