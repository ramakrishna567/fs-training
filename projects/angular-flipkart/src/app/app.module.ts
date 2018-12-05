import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { DealsOfDayComponent } from './home/deals-of-day/deals-of-day.component';
import { NewArrivalsComponent } from './home/new-arrivals/new-arrivals.component';
import { FeatureBrandsComponent } from './home/feature-brands/feature-brands.component';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { MobilesComponent } from './electronics/mobiles/mobiles.component';
import { CartComponent } from './cart/cart.component';
import { SellFlipkartComponent } from './sell-flipkart/sell-flipkart.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterComponent } from './electronics/filter/filter.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    CarouselComponent,
    DealsOfDayComponent,
    NewArrivalsComponent,
    FeatureBrandsComponent,
    LaptopsComponent,
    MobilesComponent,
    CartComponent,
    SellFlipkartComponent,
    DownloadAppComponent,
    NotFoundComponent,
    FilterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
