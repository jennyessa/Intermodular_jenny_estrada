import { Injectable } from '@angular/core';
import { Article, ArticleAdapter } from '../model/article/article';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  // Declaramos un arreglo privado para almacenar los artículos favoritos
  private favorites: Article[] = [];

  
  

  constructor(
    private http: HttpClient,
    private articleadapter:ArticleAdapter,
    
  ) { }


  checkIfIsFavorite (idArticle: number, idUser: number){
    // devuelve si es favorito o no por eso se pone como dato booleno. 
    return this.http.get<boolean>(`/xxx/xxx/${idArticle}/${idUser}`);

  }

  

  getArticles(): Observable<Article[]> {
    console.log("entro servicio")
    // ponemos la misma url que ponemos en postman para hacer el GET
    return this.http.get('http://localhost:8080/api/articles').pipe(
        // Adapt each item in the raw data array
        map((data: any) => data.map((item: any) => this.articleadapter.adapt(item))),
    );
}

// Método para editar un artículo según su ID
editArticleById(article: Article): Observable<any> {
  return this.http.put(`http://localhost:8080/api/article/${article.id}`, article).pipe(
    map(response => {
      console.log('Artículo actualizado:', response);
      return response;
    })
  );
}

// // Método para crear un artículo 
 createArticle(article: Article): Observable<any> {
 return this.http.post(`http://localhost:8080/api/articles`, article).pipe(
 map(response => {
 console.log('Artículo creado:', response);
return response;
  })
 );
 }





 // Método para agregar un artículo a favoritos (ahora con POST a un backend)
 addToFavorites(article: Article): Observable<any> {
  // Si tuvieras un backend, usarías POST para guardar el artículo en la base de datos
  return this.http.post('', article).pipe(
    map(response => {
      console.log('Artículo añadido a favoritos:', response);
    })
  );
}


  deleteArticleById(article: Article): Observable<any> {
    // Usarías DELETE para eliminarlo en el backend
    return this.http.delete(`http://localhost:8080/api/article/${article.id}`).pipe(
      map((response: any) => {
        // Aquí transformamos la respuesta del backend y devolvemos el mensaje adecuado
        return 'Artículo eliminado correctamente';  // El mensaje que queremos mostrar en el popup
      })
    );
  }
  



}