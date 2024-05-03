import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent {
  article: Article;

  constructor() {
    this.article = {
      name: 'Demo articulo',
      imageUrl: 'nothing.jpg',
      price: 20.0,
      isOnSale: false,
      quantityInCart: 0,
    };
  }

  incrementarCantidad() {
    this.article.quantityInCart++;
  }

  decrementarCantidad() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
