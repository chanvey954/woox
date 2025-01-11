import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterLink, RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { ReservationComponent } from './reservation/reservation.component';
const ap: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'navbr', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'reservation', component: ReservationComponent }


]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    DealsComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ap)




  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
