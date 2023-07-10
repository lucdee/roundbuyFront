import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faMagnifyingGlass, faUserAstronaut, faStore , faCaretDown, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent {
  faAngleLeft = faAngleLeft;
  faMagnifyingGlass=faMagnifyingGlass
  faUserAstronaut=faUserAstronaut
  faLinkedinIn = faLinkedinIn
  faFacebookF= faFacebookF
  faInstagram= faInstagram
  faStore= faStore
  faCaretDown=faCaretDown
  faPeopleGroup=faPeopleGroup


  constructor(private router: Router) {}
  isCurrentPage(route: string): boolean {
    return this.router.url === route;
  }

}
