import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../services/model/article/article';
import { CommonModule } from '@angular/common';
import { ArticlesService } from '../../services/articles/articles.service';




@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit{
  

   article: Article | undefined;
   idUser : number = 1;
   isFavorite: boolean = false; // Estado de favorito
   addedToFavorites: boolean = false;
   

   checkIfIsFavorite(): void {
    // envio el idArticle y idUser
    this.articleService.checkIfIsFavorite(this.article!.id,this.idUser).subscribe(
      (data: boolean) =>{
        this.isFavorite = data; // si el articulo concreto no esta en la
        // tabla de favoritos de un usuario devuleve false,
        // si lo que trae data es que si esta en un lista es true.
        // el valor que trae data se asigna a la varible isFavorite.
      }
    )
    
  }

  // toggleFavorite(article: Article): void {
  //   if (this.isFavorite) {
  //     this.removeFromFavorites(article);
  //   } else {
  //     this.addToFavorites(article);
  //   }
  // }

  //  // Añadir el artículo actual a favoritos
  //  addToFavorites(article: Article): void {
  //   console.log("anade a favoritos")
  //   this.articleService.addToFavorites(article).subscribe(
  //     () => {
  //       console.log('anade a favoritos')
  //       this.addedToFavorites=true;
        
  //     });
  // }

  // removeFromFavorites(article: Article):  void {
  //   console.log("anade a favoritos")
  //   this.articleService.removeFromFavorites(article).subscribe(
  //     () => {
  //       console.log('eliminado de favoritos')
        
          
  //     });
  // }



   constructor(
    private route: ActivatedRoute,// contiene la info de la ruta activa
    private router: Router, // Enruta compenentes 
    private articleService: ArticlesService,
    ){}

    ngOnInit(): void {
      
        // aqui obtengo los parametros de la ruta para conseguir el articulo
        // this hace referencia a los parametros del constructor en este caso 
        // usamos route.

        // me subcribo a la ruta que se activo. y lo que devuelva cuando cargue lo meto en params
      console.log(this.router.lastSuccessfulNavigation)
          if (this.router.lastSuccessfulNavigation!.extras.state) {

            this.article = this.router.lastSuccessfulNavigation!.extras.state!['article'];
            this.checkIfIsFavorite();
            

          }
     
    }

}
