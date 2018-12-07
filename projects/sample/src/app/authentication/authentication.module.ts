import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {MatToolbarModule, MatIconModule,
  MatAutocompleteModule, MatInputModule,MatBadgeModule,
  MatFormFieldModule, MatTooltipModule } from '@angular/material';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent, HelpComponent, ForgetpasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatToolbarModule, MatIconModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatBadgeModule, MatTooltipModule
  ],
  exports : [AuthenticationComponent, LoginComponent, RegisterComponent, HelpComponent, ForgetpasswordComponent]
})
export class AuthenticationModule { }
