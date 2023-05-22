import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuTitleComponent } from 'src/app/components/menu-title/menu-title.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuTitleComponent,
    BigCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
