import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DropDownAnimation } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
  animations: [DropDownAnimation]
})
export class BurgerMenuComponent {
  @Input() showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
  }
}
