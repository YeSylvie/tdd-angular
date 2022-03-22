import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
