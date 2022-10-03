import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { QualiMercadoComponent } from './quali-mercado/quali-mercado.component';
import { CurriculoEntrevistaComponent } from './curriculo-entrevista/curriculo-entrevista.component';
import { TrabalhandoComponent } from './trabalhando/trabalhando.component';
import { VariedadesComponent } from './variedades/variedades.component';

const routes: Routes =
[
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'qualifiquese',component:QualiMercadoComponent},
  {path:'curriculosEntrevista',component:CurriculoEntrevistaComponent},
  {path:'trabalhando',component:TrabalhandoComponent},
  {path:'variedades',component:VariedadesComponent},
  
  {
    path:'**',
    redirectTo:'/home',
    pathMatch:'full'
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
