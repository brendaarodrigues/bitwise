import { Component, EventEmitter, Output } from '@angular/core';
import { DropDownAnimation } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
  animations: [DropDownAnimation]
})
export class MenuMobileComponent {

  showMenu: boolean = false;
  items = ['Página inicial', 'Para você', 'Para o seu negócio', 'O Bitwise', 'Ajuda', 'Login'];
  @Output() showMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenuChange.emit(this.showMenu);
  }
}
