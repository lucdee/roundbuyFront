import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent {

  constructor(private router: Router) {}
  isCurrentPage(route: string): boolean {
    return this.router.url === route;
  }

}
