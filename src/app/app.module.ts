import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MenuMobileComponent } from './pages/header/menu-mobile/menu-mobile.component';
import { ProfileInvertDirective } from './directives/profile-invert.directive';
import { ProfileContentDirective } from './directives/profile-content.directive';
import { HttpClientModule } from '@angular/common/http';
import { MenuComputerComponent } from './pages/header/menu-computer/menu-computer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    MenuMobileComponent,
    ProfileInvertDirective,
    ProfileContentDirective,
    MenuComputerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
