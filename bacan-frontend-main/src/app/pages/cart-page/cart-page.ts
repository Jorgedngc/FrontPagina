import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/shared/navbar-component/navbar-component';
import { SidevarComponent} from '../../components/cart/sidevar-sidevar/sidevar-component/sidevar-component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,
    NavbarComponent,
    SidevarComponent],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {
  constructor() { }
}
