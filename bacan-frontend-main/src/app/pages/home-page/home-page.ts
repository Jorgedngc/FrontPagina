import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/shared/navbar-component/navbar-component';
import {FooterComponent} from '../../components/home/footer-component/footer-component';
import {HeroComponent} from '../../components/home/hero-component/hero-component';
import {CardComponent} from '../../components/home/card-component/card-component';
import {CommentComponent} from '../../components/home/comment-component/comment-component';
import {SubcriptionComponent} from '../../components/home/subcription-component/subcription-component';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    CardComponent,
    CommentComponent,
    SubcriptionComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
