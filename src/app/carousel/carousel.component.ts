import { Component } from '@angular/core';

interface CarouselItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  currentIndex = 0;
  startX: number = 0;

  items: CarouselItem[] = [
    { icon: 'attach_money', title: 'First Slide', description: 'Description for first slide'},
    { icon: ' bar_char', title: 'Second Slide', description: 'Description for second slide'},
    { icon: 'border_all', title: 'Third Slide', description: 'Description for third slide'},
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    const diffX = this.startX - endX;

    // Check the swipe direction
    if (diffX > 50) {
      this.next(); // Swipe left
    } else if (diffX < -50) {
      this.prev(); // Swipe right
    }
  }
}
