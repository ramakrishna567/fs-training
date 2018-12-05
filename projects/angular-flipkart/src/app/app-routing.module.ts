import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { CartComponent } from './cart/cart.component';
import { SellFlipkartComponent } from './sell-flipkart/sell-flipkart.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: 'sell', component: SellFlipkartComponent },
  { path: "download_app", component: DownloadAppComponent },
  { path: "electronics/laptops", component: LaptopsComponent },
  { path: "product", component: ProductComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
