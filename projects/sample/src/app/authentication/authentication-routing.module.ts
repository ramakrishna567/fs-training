import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path : "", component : AuthenticationComponent},
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "help", component : HelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
