import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { KeralaComponent } from './pages/kerala/kerala.component';
import { DUComponent } from './pages/du/du.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [

  {
    path:"home", component: HomepageComponent
  },
  {
    path:"", component: ProductsComponent
  },
  {
    path:"kerala", component: KeralaComponent
  },
  {
    path:"du", component: DUComponent
  }
];
