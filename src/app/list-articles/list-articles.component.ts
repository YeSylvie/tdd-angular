import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  public basket: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // public addArticle(article : string) { TDD 1
  //   let result = [];
  //   result.push(article);
  //   return result;
  // }

  public addArticle(article : string) { //TDD 2
    this.basket.push(article);
    return this.basket;
  }

}
