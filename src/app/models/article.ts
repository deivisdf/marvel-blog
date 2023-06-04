export class Article{
    author?: string;
    title?: string;
    description?: string;
    urlToImage?: string;
    content?: string;


    constructor(author?: string, title?: string, description?: string,  urlToImage?: string, content?: string ){
      this.author = author;
      this.title = title;
      this.description = description;
      this.urlToImage= urlToImage;
      this.content = content;
    }

   
}