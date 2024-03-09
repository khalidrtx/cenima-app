import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [

{path:"products", component : ProductsComponent},
{path:"", component : NavbarComponent},

];
