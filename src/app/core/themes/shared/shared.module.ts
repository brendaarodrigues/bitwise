import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
  ],
})
export class SharedModule {}