package com.sesion.intermodular.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sesion.intermodular.Model.Article;

@Repository

public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findByTitle(@Param("title") String title);

}
