import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-component',
  imports: [],
  templateUrl: './shopping-cart-component.html',
  styleUrl: './shopping-cart-component.css'
})
export class ShoppingCartComponent {

  constructor(private router: Router) {}

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
