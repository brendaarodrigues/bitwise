import { Component, EventEmitter, Output } from '@angular/core';
import { DropDownAnimation } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [DropDownAnimation]
})
export class MenuComponent {

  showMenu: boolean = false;
  @Output() showMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  navigationItems = [
    {
      label: 'Página inicial',
      link: 'home',
      options: [],
      showDropdown: false,
    },
    {
      label: 'Para você',
      options: [
        { label: 'Conta do Bitwise', link: 'home' },
        { label: 'Cartão de crédito', link: 'home' },
        { label: 'Investimentos', link: 'home' }
      ],
      showDropdown: true,
    },
    {
      label: 'Para o seu negócio',
      options: [
        { label: 'Conta PJ', link: 'home' },
        { label: 'Cartão de crédito PJ', link: 'home' },
      ],
      showDropdown: false,
    },
    {
      label: 'Bitwise Bank',
      options: [
        { label: 'Sobre nós', link: 'home' },
        { label: 'Newsletter', link: 'home' },
        { label: 'Carreiras', link: 'home' }
      ],
      showDropdown: false,
    },
    {
      label: 'Ajuda',
      options: [],
      showDropdown: false
    },
    {
      label: 'Login',
      options: [],
      showDropdown: false,
      icon: 'save_alt'
    }
  ];

  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenuChange.emit(this.showMenu);
  }
}
