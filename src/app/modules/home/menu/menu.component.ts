import { Component, Input } from '@angular/core';
import { DropDownAnimation } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [DropDownAnimation]
})
export class MenuComponent {
  showMenu: boolean = false;

  @Input() menuActive!: boolean;

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
        { label: 'Conta do Bitwise', link: 'conta' },
        { label: 'Cartão de crédito', link: 'cartao' },
        { label: 'Investimentos', link: 'investimentos' }
      ],
      showDropdown: true,
    },
    {
      label: 'Para o seu negócio',
      options: [
        { label: 'Conta PJ', link: 'conta-pj' },
        { label: 'Cartão de crédito PJ', link: 'cartao-pj' },
      ],
      showDropdown: false,
    },
    {
      label: 'Bitwise Bank',
      options: [
        { label: 'Sobre nós', link: 'sobre-nos' },
        { label: 'Newsletter', link: 'newsletter' },
        { label: 'Carreiras', link: 'carreiras' }
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
  }
}
