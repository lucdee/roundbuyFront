import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent {
  faAngleLeft = faAngleLeft;
  faMagnifyingGlass=faMagnifyingGlass

  constructor(private router: Router) {}
  isCurrentPage(route: string): boolean {
    return this.router.url === route;
  }

}
