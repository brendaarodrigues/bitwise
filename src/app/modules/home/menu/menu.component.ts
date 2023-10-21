import { Component } from '@angular/core';
import { navigationItems } from 'src/app/core/utils/navigation-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items = navigationItems;
  currentOpenItem: any = null;
  currentOpenMenuTrigger: any = null;

  triggerMenuIfNotActive(item: any, menuTrigger: any) {
    if (this.currentOpenItem && this.currentOpenItem !== item) {
      this.closeMenu(this.currentOpenItem, this.currentOpenMenuTrigger);
    }

    if (!item.triggered) {
      item.triggered = true;
      menuTrigger.openMenu();
      this.currentOpenItem = item;
      this.currentOpenMenuTrigger = menuTrigger;
    }
  }

  closeMenu(item: any, menuTrigger: any) {
    if (item.triggered) {
      item.triggered = false;
      menuTrigger.closeMenu();
      this.currentOpenItem = null;
      this.currentOpenMenuTrigger = null;
    }
  }
}
