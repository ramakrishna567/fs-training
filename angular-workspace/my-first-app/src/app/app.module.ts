import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  MatProgressSpinnerModule,
  MatTabsModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
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
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './guards/admin.guard';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import {MatBadgeModule} from '@angular/material';
import { CartComponent } from './cart/cart.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent, DialogOverviewExampleDialog } from './profile/profile.component';

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
    FurnitureComponent,
    DirectivesComponent,
    InteractionComponent,
    CartComponent,
    FormsComponent,
    ProfileComponent, DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    AppRoutingModule2,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatAutocompleteModule,
    MatProgressSpinnerModule, AdminModule,
    MatBadgeModule, MatTabsModule, FormsModule, ReactiveFormsModule, MatDialogModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [AuthService, ProductsService, AuthGuard, AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
