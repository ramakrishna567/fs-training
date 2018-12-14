import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CarouselComponent } from '../home/carousel/carousel.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
    //For empty URL
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "error", component: ErrorComponent },
    { path: "databind", component: DataBindingComponent },
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