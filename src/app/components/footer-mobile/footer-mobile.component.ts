import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse , faStar, faUser, faCartShopping, faBell} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent {
  faHouse = faHouse;
  faStar = faStar;
  faUser = faUser;
  faBell = faBell;
  faCartShopping = faCartShopping;

  constructor(private router: Router) {}
  isCurrentPage(route: string): boolean {
    return this.router.url === route;
  }


}
