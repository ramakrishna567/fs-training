import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule2 } from './app-routes/app-routing.module';
import { TopCategoriesComponent } from './home/top-categories/top-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { CarsComponent } from './categories/cars/cars.component';
import { BikesComponent } from './categories/bikes/bikes.component';
import { BooksComponent } from './categories/books/books.component';
import { FurnitureComponent } from './categories/furniture/furniture.component';
import { AuthGuard } from './auth.guard';
import { TokeninterceptorService } from './services/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    TopCategoriesComponent,
    CarouselComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    DataBindingComponent,
    ErrorComponent,
    CarsComponent,
    BikesComponent,
    BooksComponent,
    FurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    AppRoutingModule2,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService, ProductsService, AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
