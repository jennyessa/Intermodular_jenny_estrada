
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { NavigationExtras, Router} from '@angular/router';
import { AuthService } from '../../../services/authService/auth.service';
import { Article } from '../../../services/model/article/article';
import { ArticlesService } from '../../../services/articles/articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  imports: [AsyncPipe, CommonModule,NgFor, NgIf,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{

  // creo array de todos los articulos, Article CREO la clase en Model 
  // y la importo aqui.
  
  articles: Article[] | undefined;
  popUpDeleted: string = '' ;
  isPopupVisible = false;

  constructor(
   
   private articleService: ArticlesService,
    private authService: AuthService,
   private router: Router,
 ){}

 openArticle(article: Article) {
  // el article viene los datos del articulo del index que se ha dado clic en leer mas.
    let navigationExtras: NavigationExtras = {
        state: {
           article: article
        }
    };
    // navigate hacia el componete article-detail
    this.router.navigate(['article-detail'], navigationExtras);
}


editArticle(article: Article) {
  // el article viene los datos del articulo del index que se ha dado clic en leer mas.
    let navigationExtras: NavigationExtras = {
        state: {
           article: article
        }
    };
    // navigate hacia el componete article-detail
    this.router.navigate(['edit-form'], navigationExtras);
}


deleteArticle(article: Article) {
 
  this.articleService.deleteArticleById(article).subscribe(
   // (data: any) => {
     // console.log(data)
     // message el mensaje lo defino en el servicio en el map()
      (message: string) => {
        this.popUpDeleted = message;

        // Mostrar el popup
        this.isPopupVisible = true;
        this.articles = this.articles?.filter(a => a.id !== article.id);// para actulizar la lista de
        // de articulos
        
      
    });
}





  ngOnInit(): void {
    console.log("entro on init")
    this.articleService.getArticles().subscribe(
      (data: Article[] | undefined) => {
        console.log(data)
          this.articles = data;// lo que trae la var data se guarda en 
          // articles viene de articles: Article[] | undefined;
      }); 

  }

  closePopup() {
    this.isPopupVisible = false;  // Cambiar el estado a 'false' para ocultar el popup
  }

  createArticle() {
  
    //     // navigate hacia el componete article-detail
       this.router.navigate(['create-article']); 
       // este enlace lleva al formualrio de crear
     }



  
  user$ = this.authService.user$;

  async signOut() {
    try {
      await this.authService.logout();
      console.log('User signed out');
      this.router.navigateByUrl('/');
    } catch (error) {
      console.error('Sign out error:', error);

    }
  }

  
  

}
