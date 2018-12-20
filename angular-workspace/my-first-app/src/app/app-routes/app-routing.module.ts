import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from '../home/carousel/carousel.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { ErrorComponent } from '../error/error.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CarsComponent } from '../categories/cars/cars.component';
import { BikesComponent } from '../categories/bikes/bikes.component';
import { AdminComponent } from '../admin/admin.component';
import { ProductsComponent } from '../admin/products/products.component';
import { UsersComponent } from '../admin/users/users.component';
import { AuthGuard } from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';
import { DirectivesComponent } from '../directives/directives.component';

const routes: Routes = [

    //For empty URL
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path : "directives", component : DirectivesComponent}
    { path: "error", component: ErrorComponent },
    {
        path: "categories", component: CategoriesComponent, canActivate: [AuthGuard],
        children: [
            { path: "cars", component: CarsComponent },
            { path: "bikes", component: BikesComponent }
        ]
    },
    { path: "databind", component: DataBindingComponent },
    {
        path: "admin", component: AdminComponent, canActivate : [AdminGuard],
        children: [
            { path: "products", component: ProductsComponent },
            { path: "users", component: UsersComponent }
        ]
    },

    //not Found Url for any url
    { path: "**", component: NotFoundComponent }
]

//This if group components
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutingModule2 { }