import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BurgerMenuModule } from 'src/app/components/burger-menu/burger-menu.module';
import { SharedModule } from 'src/app/core/themes/shared/shared.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BurgerMenuModule,
    SharedModule,
  ],
  declarations: [HomeComponent, MenuComponent]
})
export class HomeModule { }
