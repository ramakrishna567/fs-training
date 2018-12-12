import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {MatToolbarModule, MatIconModule,
  MatAutocompleteModule, MatInputModule,MatSlideToggleModule,
  MatFormFieldModule, MatGridListModule, MatButtonModule,
  MatCheckboxModule, MatDatepickerModule, MatSnackBarModule,
  MatStepperModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent, HelpComponent, ForgetpasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule, ReactiveFormsModule, FormsModule,
    MatInputModule,MatAutocompleteModule, MatSlideToggleModule,
    MatGridListModule, MatFormFieldModule, MatIconModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule,
    MatStepperModule, MatRadioModule
  ],
  exports : [AuthenticationComponent, LoginComponent, RegisterComponent, HelpComponent, ForgetpasswordComponent],
  providers : [ MatDatepickerModule ]
})
export class AuthenticationModule { }
