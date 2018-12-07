import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [CarouselComponent, TopCategoriesComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports : [CarouselComponent, TopCategoriesComponent, HomeComponent]
})
export class HomeModule { }
