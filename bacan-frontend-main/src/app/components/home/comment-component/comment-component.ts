import {Component} from '@angular/core';

interface Comment {
  photoLink: string;
  comment: string;
  user: string;
}

@Component({
  selector: 'app-comment-component',
  imports: [],
  templateUrl: './comment-component.html',
  styleUrl: './comment-component.css'
})
export class CommentComponent {
  comments: Comment[];


  constructor() {
    this.comments = [
      {
        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
        comment: '"Llevo meses comprando aquí y la calidad de los productos es siempre excelente. ¡El servicio al cliente es excepcional!"',
        user: 'John Doe'
      },
      {
        photoLink: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
        comment: '"Como emprendedor en esta plataforma, he visto crecer mi negocio enormemente. Las herramientas y el soporte que ofrecen son excepcionales."',
        user: 'Andrea Cruz'
      },
      {
        photoLink: 'https://avatars.githubusercontent.com/u/32954578?v=4',
        comment: '"Mi primera compra superó todas mis expectativas. El producto llegó rápido y era exactamente como se describía. ¡Sin duda volveré a comprar!"',
        user: 'Carlos Pérez'
      }
    ]
  }
}
