import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../services/model/article/article';
import { ArticlesService } from '../../services/articles/articles.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnInit {
   article: Article | undefined;
   articleId: number | undefined = -1;
   title: string | undefined = '';
   text: string | undefined= '';
   excerpt:string | undefined = '';
   image: string | undefined= '';

   



  constructor(
     private route: ActivatedRoute,// contiene la info de la ruta activa
     private router: Router, // Enruta compenentes 
     private articleService: ArticlesService,
     ){}


  ngOnInit(): void {
    if (this.router.lastSuccessfulNavigation!.extras.state) {

      this.article = this.router.lastSuccessfulNavigation!.extras.state!['article'];
      // necesitamos sacar la info del obejto article y asignarla a las propiedades
      // para poder que haga binding con ngModel en el htlm. [(ngModel)]="text" [(ngModel)]="title"
      this.articleId =this.article?.id;
      this.title = this.article?.title;
      this.text= this.article?.text;
      this.excerpt= this.article?.excerpt;
      this.image= this.article?.image;
   

    }
  }

  //creo metodo para editar

  editArticle(){
    
    const article: Article = {
      // los obejtos se crean a partir de los constructores
      id:this.articleId ?? 0,
      title:this.title  ?? "",
      text:this.text ?? "",
      excerpt:this.excerpt ?? "",
      image:this.image ?? ""
    };
    
      this.articleService.editArticleById(article).subscribe(
        (data: any) => {
          console.log(data)
        });


      


  }


}
