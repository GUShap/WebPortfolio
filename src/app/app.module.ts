import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './shared/cmps/navbar/navbar.component';
import { FooterComponent } from './shared/cmps/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/prtfolio.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { ClickClassDirective } from './directives/click-class.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    HoverClassDirective,
    ClickClassDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
