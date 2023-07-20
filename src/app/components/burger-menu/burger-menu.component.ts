import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  @Input() showMenu = false;

  navigationItems = [
    {
      label: 'Para você',
      link: '#',
      options: [],
      showDropdown: false,
    },
    {
      label: 'Para o seu negócio',
      link: '#',
      options: [
        { label: 'Overview', link: '#overview' },
        { label: 'Mission', link: '#mission' },
        { label: 'Team', link: '#team' }
      ],
      showDropdown: false
    },
    {
      label: 'Bitwise Bank',
      // link: '#',
      options: [
        { label: 'Service 1', link: '#service1' },
        { label: 'Service 2', link: '#service2' },
        { label: 'Service 3', link: '#service3' }
      ],
      showDropdown: false
    },
    {
      label: 'Ajuda',
      link: '#',
      options: [],
      showDropdown: false
    },
    {
      label: 'Login',
      link: '#',
      options: [],
      showDropdown: false
    }
  ];
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
  }
}
