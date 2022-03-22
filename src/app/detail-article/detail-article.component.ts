import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  public articleName: string  =  '';

  public setInput(newInput: string) {
    this.articleName = newInput;
    return this.articleName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
