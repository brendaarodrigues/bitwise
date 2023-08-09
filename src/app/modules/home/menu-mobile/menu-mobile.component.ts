import { Component, EventEmitter, Output } from '@angular/core';
import { DropDownAnimation } from 'src/app/core/animations/animations';
import { navigationItems } from 'src/app/core/utils/navigation-items';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
  animations: [DropDownAnimation]
})
export class MenuMobileComponent {

  showMenu: boolean = false;
  items = navigationItems;
  
  @Output() showMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenuChange.emit(this.showMenu);
  }
}
