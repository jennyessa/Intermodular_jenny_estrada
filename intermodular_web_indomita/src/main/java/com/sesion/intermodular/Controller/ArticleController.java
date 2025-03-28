package com.sesion.intermodular.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sesion.intermodular.Model.Article;
import com.sesion.intermodular.Repository.ArticleRepository;


// cree un corconf para que permita las comunicacion delete put post get
//@CrossOrigin (origins = "http://localhost:4200" )

// @CrossOrigin(origins = "http://localhost:4200",
//  allowedHeaders = "*", methods = 
//  {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})

@RestController
@RequestMapping("/api")
public class ArticleController {


     // inyectamos el repositorio
    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping("/articles")  // Sin llaves aquí
    public List<Article> getArticle() {
        return articleRepository.findAll();
    }

  

    @GetMapping("/article/{id}")
    public Article getArticleById(@PathVariable Long id) {
    return articleRepository.findById(id).orElse(null);
}

    @PostMapping("/articles")
    public Article saveArticle (@RequestBody Article article){
        return articleRepository.save(article);
    }


    @PutMapping("/article/{id}")
    public Article updateArticle(@PathVariable Long id, @RequestBody Article article){
        Article articleUpDate = articleRepository.findById(id).get();
        articleUpDate.setTitle(article.getTitle());
        articleUpDate.setText(article.getText());
        articleUpDate.setExcerpt(article.getExcerpt());
        return articleRepository.save(articleUpDate);
    }

    @DeleteMapping("/article/{id}")
    public void deleteArticle(@PathVariable Long id){
        articleRepository.deleteById(id);
    }

}
