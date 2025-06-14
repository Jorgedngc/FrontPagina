import {Component} from '@angular/core';

interface ProductItem {
  imageLink: string;
  title: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {
  products: ProductItem[];


  constructor() {
    this.products = [
      {
        imageLink: 'https://revistatuk.com/wp-content/uploads/2024/09/artesania-1.jpg',
        title: 'Producto 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequatur deserunt dolorum explicabo harum inventore quisquam sunt vero, voluptatibus.',
        price: '$9.99'
      },
      {
        imageLink: 'https://previews.123rf.com/images/sukr13/sukr131608/sukr13160800446/61067060-beautiful-ware-wiht-art-design-thailand.jpg',
        title: 'Producto 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequatur deserunt dolorum explicabo harum inventore quisquam sunt vero, voluptatibus.',
        price: '$9.99'
      },
      {
        imageLink: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/07/21/000978061W.jpg',
        title: 'Producto 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequatur deserunt dolorum explicabo harum inventore quisquam sunt vero, voluptatibus.',
        price: '$9.99'
      },
      {
        imageLink: 'https://www.estoy.cl/wp-content/uploads/2020/03/foto_donPeter-02-1024x702.jpg',
        title: 'Producto 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequatur deserunt dolorum explicabo harum inventore quisquam sunt vero, voluptatibus.',
        price: '$9.99'
      },
    ]
  }
}
