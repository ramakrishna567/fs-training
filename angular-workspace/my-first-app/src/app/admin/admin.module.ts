import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule2 } from '../app-routes/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonToggleModule} from '@angular/material';

@NgModule({
  declarations: [AdminComponent, ProductsComponent, UsersComponent],
  imports: [
    CommonModule, AppRoutingModule2,FormsModule,
    MatProgressSpinnerModule, MatTabsModule, MatFormFieldModule, MatInputModule,
    MatButtonToggleModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
