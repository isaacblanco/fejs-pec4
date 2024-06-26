import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './components/article/article-item/article-item.component';
import { ArticleListComponent } from './components/article/article-list/article-list.component';

@NgModule({
  declarations: [AppComponent, ArticleItemComponent, ArticleListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ArticleItemComponent, ArticleListComponent],
})
export class AppModule {}
