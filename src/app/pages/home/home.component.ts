import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 articles: Article[] = [];

  constructor( private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }


  getArticles(){
    this.articleService.getArticles().subscribe(data =>{
       this. articles = data;
    })
  }

}
