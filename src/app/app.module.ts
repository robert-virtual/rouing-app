import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { ExponentialPipe } from './exponential.pipe';
import { SavePipe } from './save.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    ProductsComponent,
    InicioComponent,
    ExponentialPipe,
    SavePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
