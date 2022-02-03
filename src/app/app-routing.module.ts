import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioComponent } from './pages/portfolio/prtfolio.component';

const routes: Routes = [
  {
  path:'',
  component:HomePageComponent
},
{
  path:'portfolio',
  component: PortfolioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
