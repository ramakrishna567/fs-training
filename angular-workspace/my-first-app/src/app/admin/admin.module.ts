import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AdminComponent, ProductsComponent, UsersComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
