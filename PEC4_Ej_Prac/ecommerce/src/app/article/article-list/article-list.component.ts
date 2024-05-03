import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleQuantityChange } from 'src/app/models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  articles: Article[] = [
    {
      name: 'Artículo 1',
      imageUrl: 'nothing.jpg',
      price: 100,
      isOnSale: true,
      quantityInCart: 2,
    },
    {
      name: 'Artículo 2',
      imageUrl: 'nothing.jpg',
      price: 200,
      isOnSale: true,
      quantityInCart: 1,
    },
    {
      name: 'Artículo 3',
      imageUrl: 'nothing.jpg',
      price: 150,
      isOnSale: false,
      quantityInCart: 0,
    },
  ];

  emitirIncrementoCantidad(article: Article) {
    article.quantityInCart++;
  }

  emitirDecrementarCantidad(article: Article) {
    if (article.quantityInCart > 0) {
      article.quantityInCart--;
    }
  }

  cambiosEnLaCantidad(event: ArticleQuantityChange) {
    const article = event.article;
    const changeInQuantity = event.changeInQuantity;

    if (changeInQuantity > 0) {
      this.emitirIncrementoCantidad(article);
    } else {
      this.emitirDecrementarCantidad(article);
    }
  }
}
