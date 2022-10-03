import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  /* criarUsuario(frm) {
    if(frm.value.email != "" && frm.value.password != "" && frm.value.firstname != "" && frm.value.lastname != "" ){
      if(frm.value.cfPassword != "")
      {
        if(frm.value.password === frm.value.cfPassword )
        {
          if(frm.value.password.length >= 6)
          {
            console.log(frm.email);
            this.auth.criarUsuario(frm.value);
            this.router.navigate(['/login']);
          }else
          {
            //alert("Insira uma senha que tenha 6 caractéres ou mais")
          }
        }else
        {
          //alert("Suas senhas não são iguais")

        }

      }else
      {
        //alert("Confirme a sua senha")

      }

    }else{
      //alert("preencha todos os campos");

    }

  }*/

  criarUsuario(frm) {
    this.auth.criarUsuario(frm.value);
    if(frm.value.email != "" && frm.value.password != "" && frm.value.firstname != "" && frm.value.lastname != "" ){
      if(frm.value.cfPassword != "")
      {
        if(frm.value.password === frm.value.cfPassword )
        {
          if(frm.value.password.length >= 6)
          {
            this.router.navigate(['/login']);
          }else
          {
            //alert("Insira uma senha que tenha 6 caractéres ou mais")
          }
        }else
        {
          alert("Suas senhas não são iguais")

        }

      }else
      {
        //alert("Confirme a sua senha")

      }

    }else{
      //alert("preencha todos os campos");

    }

  }




}
