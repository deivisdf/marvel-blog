import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Article} from '../models/article'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  //Faça o cadastro no site newsAPI e coloque a chave de api na string KEY
  key: string = '';
  urlApi = `https://newsapi.org/v2/everything?q=marvel&apiKey=${this.key}`;

  constructor(private http : HttpClient) { }

  getArticles(){
    return this.http.get(this.urlApi)
    .pipe(
      map(data=>{
        
        let arrayArticles: Article[] = [];

        let values = Object.values(data)[2];


        for (let i = 0; i < values.length; i++) {
          const element = values[i];
          let art = new Article();
          art.author = element.author;
          art.title = element.title;
          art.description = element.description;
          art.content = element.content;
          art.urlToImage = element.urlToImage

          arrayArticles.push(art);
        }
        return arrayArticles;
       
      })
    )
     

    
  }
  



}
