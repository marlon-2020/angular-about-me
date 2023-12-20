import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: '', redirectTo: '/about-me', pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '**', redirectTo:'about-me', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
