import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  private router: Router;
  visibility: boolean = false;
  visibilityIcon: string = "visibility_off";


  constructor() {
    this.router = inject(Router);
  }

  onClickChangeVisibility(): void {
    if (!this.visibility) {
      this.visibilityIcon = "visibility";
      this.visibility = true;
    } else {
      this.visibilityIcon = "visibility_off";
      this.visibility = false;
    }
  }

  onCLickRedirectToHomePage() {
    void this.router.navigateByUrl("/home");
  }

  onClickRedirectToRegisterPage() {
    void this.router.navigateByUrl("/signup")
  }
}
