import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private scroller: ViewportScroller, private router: Router) {}

  navigateTop() {
  setTimeout(() => {
    this.scroller.scrollToAnchor("#");
  }, 100);
  }
}
