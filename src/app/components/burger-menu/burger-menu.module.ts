import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu.component';
import { SharedModule } from 'src/app/core/themes/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [BurgerMenuComponent],
  exports: [BurgerMenuComponent],
})
export class BurgerMenuModule { }
