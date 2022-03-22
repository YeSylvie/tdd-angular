import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ListArticlesComponent } from './list-articles.component';
import { DetailArticleComponent } from '../detail-article/detail-article.component';
import { HttpParams } from '@angular/common/http';

describe('ListArticlesComponent', () => {
  let component: ListArticlesComponent;
  let fixture: ComponentFixture<ListArticlesComponent>;
  let detailcomponent : DetailArticleComponent;
  let detailfixture: ComponentFixture<DetailArticleComponent>;

  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    await TestBed.configureTestingModule({
      declarations: [ ListArticlesComponent,  DetailArticleComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    detailfixture = TestBed.createComponent(DetailArticleComponent);
    detailcomponent = detailfixture.componentInstance;
    detailfixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TEST UNITAIRE
  it('Ajoute un premier article', function() {
    var article = 'apple';
    var allArticles = component.addArticle(article);
    expect(allArticles).toEqual(['apple']);
  });

  it('Ajoute un autre article', function() {
    var article = 'orange';
    component.basket = ['apple'];
    var allArticles = component.addArticle(article);
    expect(allArticles).toEqual(['apple', 'orange']);
  });

  // TEST INTEGRATION
  it('Je veux voir le détail de mon article', function() {
    const fixture = TestBed.createComponent(DetailArticleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Pomme');
  });

  it('Je veux voir le détail de mon article x', () => {
    const parametersArticleName = ['apple', 'orange']
    parametersArticleName.forEach((parameterArticleName) => {
      detailcomponent.setInput(parameterArticleName);
      detailfixture.detectChanges();
      expect(detailfixture.nativeElement.querySelector('h1').innerText).toEqual(parameterArticleName);
    })
  });
});
