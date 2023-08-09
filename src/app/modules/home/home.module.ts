import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { BurgerMenuModule } from 'src/app/components/burger-menu/burger-menu.module';
import { SharedModule } from 'src/app/core/themes/shared/shared.module';
import { AccountFormComponent } from './account-form/account-form.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BurgerMenuModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    MenuMobileComponent,
    AccountFormComponent,
  ],
})
export class HomeModule {}
