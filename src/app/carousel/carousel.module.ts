import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SharedModule } from 'src/app/core/themes/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class CarouselModule { }
