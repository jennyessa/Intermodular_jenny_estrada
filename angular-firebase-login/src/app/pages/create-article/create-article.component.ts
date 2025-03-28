import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles/articles.service';
import { Article } from '../../services/model/article/article';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
   
   title: string | undefined = '';
   text: string | undefined= '';
   excerpt:string | undefined = '';
   image: string | undefined= '';
  
  

  constructor(
   
      private articleService: ArticlesService,
    
      private router: Router,
    ){}

    createArticle() {
      const article: Article = {
        id: 0,  // Si estamos creando, el id es 0
        title: this.title ?? '',
        text: this.text ?? '',
        excerpt: this.excerpt ?? '',
        image: this.image ?? ''
      };

      this.articleService.createArticle(article).subscribe(
        (data: any) => {
          console.log(data)
        });

        this.router.navigate(['/index']);  // Redirige al índice
  


      }
  }
