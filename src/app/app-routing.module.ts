import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'view', component: ViewComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
