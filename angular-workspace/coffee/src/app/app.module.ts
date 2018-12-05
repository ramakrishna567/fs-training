import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoastingComponent } from './roasting/roasting.component';
import { GrindingComponent } from './grinding/grinding.component';
import { BrewingComponent } from './brewing/brewing.component';
import { DrinksComponent } from './drinks/drinks.component';
import { CoffeeSurveyComponent } from './coffee-survey/coffee-survey.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoastingComponent,
    GrindingComponent,
    BrewingComponent,
    DrinksComponent,
    CoffeeSurveyComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
