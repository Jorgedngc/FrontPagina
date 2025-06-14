import {Component, inject} from '@angular/core';
import {NavbarItem} from '../../../domain/navbar-item';
import {ShoppingCartComponent} from '../../home/shopping-cart-component/shopping-cart-component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    ShoppingCartComponent
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {
  private readonly router: Router;
  navbarItems: NavbarItem[];

  constructor() {
    this.router = inject(Router);
    this.navbarItems = [
      {
        name: "Emprendimientos",
        icon: "storefront",
        link: "/edit",
        isComponent: false
      },
      {
        name: "Productos",
        icon: "shelves",
        link: "#",
        isComponent: false
      },
      {
        name: "Categorías",
        icon: "interests",
        link: "#",
        isComponent: false
      },
      {
        name: "#",
        icon: "#",
        link: "#",
        isComponent: true
      },
      {
        name: "Perfil",
        icon: "account_circle",
        link: "/login",
        isComponent: false
      },
    ];
  }

  redirectToLink(link: string): void {
    void this.router.navigateByUrl(link);
  }
}
