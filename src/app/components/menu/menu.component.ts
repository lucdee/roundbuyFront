import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
  isOpen = false;

  constructor(private router: Router) {}
  isCurrentPage(route: string): boolean {
    return this.router.url === route;
  }

  isRendered: boolean = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isRendered = true;

    }, 200);
    this.isRendered = false;
  }

  ngOnInit() {

  }
}

