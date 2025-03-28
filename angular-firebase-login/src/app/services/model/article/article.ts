import { Injectable } from '@angular/core';
import { Adapter } from '../../core/adapters/adapter';



// Model article

export class Article {

    constructor(

        public id: number,
        public title: string,
        public text: string,
        public excerpt: string,
        public image: string,
    ) { }

};

@Injectable({
    providedIn: 'root'
})
export class ArticleAdapter implements Adapter<Article> {

    adapt(item: any): Article {
        
        return new Article(
            // voy extrarer las propiedades de JSON y se los paso a new article 
            // Y devuelvo el obejto Article.
            item.id,
            item.title,
            item.text,
            item.excerpt,
            item.image
          );
    }
}
