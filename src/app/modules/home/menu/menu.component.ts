import { Component, OnInit } from '@angular/core';
import { navigationItems } from 'src/app/core/utils/navigation-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items = navigationItems;

  ngOnInit() {}

  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
  }
}
