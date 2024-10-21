import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { BurgerMenuModule } from 'src/app/components/burger-menu/burger-menu.module';
import { SharedModule } from 'src/app/core/themes/shared/shared.module';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { AccountBenefitsComponent } from './components/account-benefits/account-benefits.component';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BurgerMenuModule,
    CarouselModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    MenuMobileComponent,
    AccountFormComponent,
    AccountBenefitsComponent,
    CreditCardComponent,
    FooterComponent,
  ],
})
export class HomeModule {}
