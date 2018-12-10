import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './authentication/authentication.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import {MatToolbarModule, MatIconModule,
   MatAutocompleteModule, MatInputModule,MatBadgeModule,
   MatFormFieldModule, MatTooltipModule, MatDialogModule} from '@angular/material';
   import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    HomeModule,
    MatToolbarModule, MatIconModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatBadgeModule, MatTooltipModule, MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
