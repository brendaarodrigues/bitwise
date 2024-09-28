import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  navigationItems = ['Página inicial', 'Para você', 'Para o seu negócio', 'O Bitwise', 'Ajuda'];
  }
