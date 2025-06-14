import {Routes} from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {LoginPage} from './pages/login-page/login-page';
import {RegisterPage} from './pages/register-page/register-page';
import {CartPage} from './pages/cart-page/cart-page';
import {EditPage} from './pages/edit-page/edit-page';

export const routes: Routes = [
  {
    component: HomePage,
    path: "home"
  },
  {
    component: LoginPage,
    path: "login"
  },
  {
    component: RegisterPage,
    path: "signup"
  },
  {
    component: CartPage,
    path: "cart"
  },
  {
    component: EditPage,
    path: "edit"
  },
  {
    path: "**",
    redirectTo: "/home"
  },
];
