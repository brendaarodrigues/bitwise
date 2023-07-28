import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BurgerMenuModule } from 'src/app/components/burger-menu/burger-menu.module';
import { SharedModule } from 'src/app/core/themes/shared/shared.module';
import { AccountFormComponent } from './account-form/account-form.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BurgerMenuModule,
    SharedModule,
  ],
  declarations: [HomeComponent, MenuComponent, AccountFormComponent]
})
export class HomeModule { }
