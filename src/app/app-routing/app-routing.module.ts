import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AccountComponent } from '../account/account.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ProductsComponent } from '../products/products.component';
const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'isRight' },
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
