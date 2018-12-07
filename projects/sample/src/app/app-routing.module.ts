import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { TopCategoriesComponent } from './home/top-categories/top-categories.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "home", component : HomeComponent},
  {path : "carousel", component : CarouselComponent},
  {path : "categories", component : TopCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
