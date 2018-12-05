import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoastingComponent } from './roasting/roasting.component';
import { GrindingComponent } from './grinding/grinding.component';
import { BrewingComponent } from './brewing/brewing.component';
import { DrinksComponent } from './drinks/drinks.component';
import { CoffeeSurveyComponent } from './coffee-survey/coffee-survey.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : "home", component : HomeComponent},
  {path : 'roasting', component : RoastingComponent},
  {path : 'grinding', component : GrindingComponent},
  {path : 'brewing', component : BrewingComponent},
  {path : 'drinks', component : DrinksComponent},
  {path : 'survey', component : CoffeeSurveyComponent},
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }